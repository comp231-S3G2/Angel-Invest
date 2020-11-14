import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PaymentService } from '../payment.service';
import {
  StripeCustomer,
  CustomerID
} from './grpc.interfaces';

@Controller()
export class PaymentController {
  private logger: Logger = new Logger('[PAYMENT-CONTROLLER-RPC]');
  constructor(private readonly paymentService: PaymentService) {}

  /*
   * RETURNS A CUSTOMER SIGNED UP FOR STRIPE.
   * @param CustomerID : id of a stripe customer.
   */
  @GrpcMethod('PaymentService', 'retrieveStripeCustomer')
  async retrieveStripeCustomer(CustomerID: CustomerID): Promise<any> {
    try {
      this.logger.log(
        `[INBOUND-REQUEST] retrieveStripeCustomer  with param ${CustomerID.id}`,
      );
      const customer = await this.paymentService.retrieveCustomer(
        CustomerID.id,
      );

      const customerCards = {
        cards: customer.sources.data,
      };
      this.logger.log(`[SUCCESS] Customer [${CustomerID.id}] Cards Retrieved`);
      this.logger.log(
        `[SUCCESS] Customer [${JSON.stringify(customerCards)}] Cards Retrieved`,
      );

      return customerCards;
    } catch (err) {
      Logger.error(`[PAYMENT-SERVICE] retrieveStripeCustomer. ${err}`);
    }
  }


  @GrpcMethod('PaymentService', 'createStripeAccount')
  async createStripeAccount(StripeCustomer: StripeCustomer): Promise<any> {
    try {
      this.logger.log(
        `[INBOUND-REQUEST] createCustomerAccount with param: ${JSON.stringify(
          StripeCustomer,
        )}`,
      );
      const CreatedCustomer = await this.paymentService.createStripeAccount(
        StripeCustomer,
      );

      return CreatedCustomer.id;
    } catch (err) {
      this.logger.error(`[PAYMENT-SERVICE] createCard error. ${err}`);
    }
  }
}
