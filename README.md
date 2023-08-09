# Shoppy
Product listing page as a simple single-page application with no routing. The views are rendered on the client with the React.js library. The box models are a mixture of flex and grid layouts.

The categories from the static header have the role of navigating between the different product types. 

We filter each product by category from our sample json structured data. Products are mapped at the main tiles grid after applying the price and color filters. Sorting is added alphabetically by name and in ascending and descending order by price. Reduced product prices are calculated in the sort handler function.

If there are more products than the rendered card tiles, Load more button add another portion of them on the grid. A counter above the sort section indicates showed products.

The data between react components is passed only with props relying on the useState hook.

At the responsive aspect passing under a max-width of 1100px, we get with mobile view. Categories and filters are displayed sticky after clicking on the menu icon on the Shoppy logo's left side. 
