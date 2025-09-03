---


## README.md


```md
# Food-Fusion


A demo e-commerce food website built with React, React Router, Redux Toolkit, Axios and TheMealDB.


## Features
- React Router for navigation
- Redux Toolkit for cart state
- Lazy loaded pages
- Axios calls to TheMealDB (free public API)
- Add to cart, update quantities, clear cart
- Responsive layout


## Run
1. Install dependencies:


```bash
npm install
```


2. Start dev server:


```bash
npm run dev
```


Open http://localhost:5173 (default Vite port).


## API
This project uses TheMealDB:
- Search meals: `https://www.themealdb.com/api/json/v1/1/search.php?s=lasagne`
- Lookup by id: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
- Categories: `https://www.themealdb.com/api/json/v1/1/list.php?c=list`


No API key required.


## Notes
- Prices are demo fixed values (₹150 per item) — replace with real prices if you integrate a real product API.
- For production, add error handling, authentication, and a real checkout/payment flow.
```


---


### Final notes
- This project is a complete starting point. You can extend it by adding authentication, persistent user carts on backend, more detailed product schemas, sorting, filters, and pagination.
- If you want, I can convert this to use Tailwind, add unit tests, or wire a mock backend or payment gateway next.




<!-- End of document -->  


