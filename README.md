# Stripe payment
Embedded Stripe payment for testing

# REQUIREMENTS
- Publishable API key to load stripe
- Client secret

# Instructions
1. Create .env file
2. Create two variables and assigned values accordingly:
- VITE_PUBLISHABLE_API_KEY e.g.
```js
test_smthg_51INuQ0EVsCjvbcLcd9gU4whxH1Lx3g0KxtvxT7F6AAe1VZO26JwAztdiDdKoWypfLWnxcNITq000bkZX4TlUxvm200CXbvIPEP
```
- VITE_CREATE_CHECKOUT_SESSION_PATH e.g.
```js
https://your_instance/create-checkout-session
```

3. Install dependencies
```nodejs
npm install
```

4. Run dev server
```nodejs
npm run dev
```

# Docs
[Stripe Docs for the above requirements](https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=embedded-checkout&client=react)

[Stripe code reference](https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=embedded-checkout&client=react#mount-checkout)