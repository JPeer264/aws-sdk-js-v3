import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CustomAvailabilityZoneMessage, DescribeCustomAvailabilityZonesMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeCustomAvailabilityZonesCommand,
  serializeAws_queryDescribeCustomAvailabilityZonesCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DescribeCustomAvailabilityZonesCommandInput extends DescribeCustomAvailabilityZonesMessage {}
export interface DescribeCustomAvailabilityZonesCommandOutput extends CustomAvailabilityZoneMessage, __MetadataBearer {}

/**
 * <p>Returns information about custom Availability Zones (AZs).</p>
 *         <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 RDS on VMware User Guide.</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeCustomAvailabilityZonesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeCustomAvailabilityZonesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeCustomAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DescribeCustomAvailabilityZonesCommand extends $Command<
  DescribeCustomAvailabilityZonesCommandInput,
  DescribeCustomAvailabilityZonesCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomAvailabilityZonesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomAvailabilityZonesCommandInput, DescribeCustomAvailabilityZonesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeCustomAvailabilityZonesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomAvailabilityZonesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CustomAvailabilityZoneMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCustomAvailabilityZonesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeCustomAvailabilityZonesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomAvailabilityZonesCommandOutput> {
    return deserializeAws_queryDescribeCustomAvailabilityZonesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
