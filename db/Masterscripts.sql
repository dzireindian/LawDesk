CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL UNIQUE,
  user_password TEXT NOT NULL
);

CREATE TABLE user_type(
  user_id uuid,
  user_type TEXT NOT NULL,
  CONSTRAINT user_id FOREIGN KEY (user_id) references users(user_id) ON DELETE CASCADE
);

CREATE TABLE case_details(
    case_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL,
    case_title TEXT NOT NULL,
    case_desc TEXT NOT NULL,
    case_status TEXT NOT NULL,
    CONSTRAINT user_id FOREIGN KEY (user_id) references users(user_id)
);

CREATE TABLE cases(
  user_id uuid NOT NULL,
  case_id uuid NOT NULL,
  CONSTRAINT user_id FOREIGN KEY (user_id) references users(user_id),
  CONSTRAINT case_id FOREIGN KEY (case_id) references case_details(case_id)
);


CREATE domain currency_domain as TEXT
CONSTRAINT currency check (value in ('AED','ALL','AMD','ARS','AUD','AWG','BBD','BDT','BMD','BND','BOB','BSD','BWP','BZD','CAD','CHF','CNY','COP','CRC','CUP','CZK','DKK','DOP','DZD','EGP','ETB','EUR','FJD','GBP','GHS','GIP','GMD','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','JMD','KES','KGS','KHR','KYD','KZT','LAK','LBP','LKR','LRD','LSL','MAD','MDL','MKD','MMK','MNT','MOP','MUR','MVR','MWK','MXN','MYR','NAD','NGN','NIO','NOK','NPR','NZD','PEN','PGK','PHP','PKR','QAR','RUB','SAR','SCR','SEK','SGD','SLL','SOS','SSP','SVC','SZL','THB','TTD','TZS','USD','UYU','UZS','YER','ZAR'))

CREATE TABLE transactions(
  receipt_id uuid PRIMARY KEY UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  amount FLOAT,
  lawdesk_tax FLOAT,
  currency currency_domain,
  Remarks TEXT,
  partial_payment BOOLEAN NOT NULL DEFAULT False,
  order_id TEXT,
  timestamp timestamp DEFAULT current_timestamp,
  CONSTRAINT user_id FOREIGN KEY (user_id) references users(user_id)
);

CREATE TABLE gateway_transaction(
razorpay_order_id TEXT NOT NULL,
razorpay_payment_id TEXT UNIQUE NOT NULL PRIMARY KEY,
razorpay_signature TEXT NOT NULL,
transaction_time timestamp default current_timestamp
);
