// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Span, SpanOptions as OTSpanOptions, SpanKind } from "@opentelemetry/api";
import { getTracer, SpanOptions, OperationTracingOptions } from "@azure/core-tracing";

/**
 * Creates a span using the global tracer.
 * @param name The name of the operation being performed.
 * @param tracingOptions The tracingOptions for the underlying http request.
 */
export function createSpan(
  operationName: string,
  tracingOptions: OperationTracingOptions = {}
): { span: Span; spanOptions: SpanOptions } {
  const tracer = getTracer();
  const spanOptions: OTSpanOptions = {
    ...tracingOptions.spanOptions,
    kind: SpanKind.INTERNAL
  };

  const span = tracer.startSpan(`Azure.Storage.File.${operationName}`, spanOptions);
  span.setAttribute("az.namespace", "Microsoft.Storage");

  let newOptions = tracingOptions.spanOptions || {};
  if (span.isRecording()) {
    newOptions = {
      ...tracingOptions.spanOptions,
      parent: span.context(),
      attributes: {
        ...spanOptions.attributes,
        "az.namespace": "Microsoft.Storage"
      }
    };
  }

  return {
    span,
    spanOptions: newOptions
  };
}
