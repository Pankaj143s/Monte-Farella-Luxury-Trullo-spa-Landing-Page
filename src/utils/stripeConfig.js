import { loadStripe } from "@stripe/stripe-js";

// Replace with your STRIPE Publishable Key
const stripePromise = loadStripe("your-publishable-key");

export default stripePromise;
