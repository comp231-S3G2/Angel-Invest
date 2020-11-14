import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import * as Stripe from 'stripe';
import { Logger } from '@nestjs/common';
import {
  StripeCustomer,
} from './gRPC/grpc.interfaces';
const stripe = new Stripe(process.env.stripeKey);

@Injectable()
export class PaymentService {
  private logger: Logger = new Logger('[PAYMENT-SERVICE');


  
  async createStripeAccount(
    StripeCustomer: StripeCustomer,
  ): Promise<Stripe.customers.ICustomer> {
    try {
      const {name, email} = StripeCustomer
      const CreatedCustomer = await stripe.customers.create({
        name,
        email
      });
      this.logger.log(
        `New customer ${JSON.stringify(CreatedCustomer)} created.`,
      );
      return CreatedCustomer;
    } catch (err) {

      this.logger.log(`[createStripeAccount] Error Creating Stripe customer ${name}`)
    }
  }

  async retrieveCustomer(id: string): Promise<Stripe.customers.ICustomer> {
    try{
      const customer = await stripe.customers.retrieve(id);
      return customer;
    } catch(err){ 
      this.logger.log(`[retrieveCustomer] Error Retrieving customer ${id}`)
    }
   
  }

  async deleteCustomer(id: string): Promise<Stripe.customers.ICustomer> {
    try{
      const customer = await stripe.customers.del(id);
      Logger.log(customer);
      return customer;
    } catch (err) {
      this.logger.log(`[deleteCustomer] Error Deleting customer ${id}`)
    }

  }

}
