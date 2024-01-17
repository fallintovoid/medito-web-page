# Medito Web Page Documentation

Medito Web Page with integrated Stripe checkouts, dynamic user donations list, recent donations in notification bar and multiple fundrising.

## Setup

### Currencies

You can setup your currencies in `/utils/constants.ts`. Currency array must satisfy type `ICurrency[]`

```javascript
export const currencies: ICurrency[] = [
  {
    value: "pln", // Value what will be passed in Stripe checkout request
    label: "PLN", // Label what will be in currency select element
    minValue: 2, // Mininmum value what User can donate
  },
  // ... 
];
```

### Styles

You can specify colors in `/styles/variables.scss`

```scss
// Colors

$color-main: #62EA0F;
$color-primary: #FFFFFF;
$color-secondary: #484848;
$color-progressbar: #B8FF8C;

$color-user-tier-1: #FF6556;
$color-user-tier-2: #FFBA56;
$color-user-tier-3: $color-main;

...

```

## Important commands
- `npm run dev` - runs dev mode
- `npm run pages:deploy` - runs deploy on cloudflare pages

## Deploy

Before running `npm run pages:deploy`, you need to provide `.env.local` variables:

- `STRIPE_SECRET_TOKEN` =  <secret_token_from_stripe>
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` =  <publishble_key_from_stripe>
- `NEXT_PUBLIC_HOST` = <your_host_url_such_as_http://localhost:3002>

***!!! Otherwise it will not work even with provided variables inside cloudflare pages***

## Architecture

- `/app` - it contains pages urls and also api routes
- `/modules` - it contains big components and has index.ts file inside and folders such as /components and /utils. Components from modules can be used only in pages and not anymore to avoid unpredictible relations
- `/UI` - it contains small components which can be used everywhere
- `/styles` - it contains style configuration files
- `/types` - it contains types which can be used everywhere
- `/utils` - it contains functions and constants which can be used everywhere

## External API integration

All donations are already handled with Stripe API (Donations incl. getting donators for each fundrising)

### Fundrisings

Currently used static data from `/utils/constants.ts`

To make website working properly with your API you need to change the code inside `/modules/HomePage/utils/getFundrisings.ts` so you will get the response of type `IFundrisingGoal[]` which is described in `/types/fundrisngGoal.ts`

```javascript
const getFundrisings = (): Promise<IFundrisingGoal[]> => {
 // Your code here
};
```

### One Fundrising

Currently used static data from `/utils/constants.ts`

To make website working properly with your API you need to change the code inside `/modules/FundrisingPage/utils/getFundrising.ts` so you will get the response of type `IFundrisingGoal` which is described in `/types/fundrisingGoal.ts`

```javascript
const getFundrising = (id: string): Promise<IFundrisingGoal> => {
  // Your code here
};
```

### Currency convertion

Currently used static currency convertion in `/utils/getConvertedValue.ts`

In order to use current convertion, the external API request must be provided. And dont forget about relation between your current currency list and your response data from request. Dont forget to adapt the code to your return value in `/app/api/checkout/route.ts GET request` and `/app/api/checkout/[id]/route.ts GET request`

```javascript
const getConvertedValue = (value: number, currency: string): Promise<string> => {
  // Your code here
};
```

### Question sending

Currently used console.logging of values from form inputs in `/modules/FundrisingPage/Page/index.tsx`.
In order to change the behavior add API request in sendEmail function

```javascript
const sendEmail = async (formData: FormData) => {
    "use server";

   /// Your code here
};
```