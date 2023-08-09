# Shoppy
Product listing page is a simple single-page application. The views are rendered on the client with the React.js library. The page layout is built using Flexbox and CSS Grid.

The categories from the static header have the role of navigating between the different product types. All products were retrieved from sample json structured data 
and filtered by category. 

Products are mapped at the main tiles grid after applying the price and color filters. Sorting is added alphabetically by name and in ascending and descending order by price. Discounted product prices are calculated in the sort handler function.

If there are more products than the rendered card tiles, Load more button adds another portion of them to the grid. A counter above the sort section shows the count of displayed products.

The data between React components is passed only with props relying on the useState hook.

At the responsive aspect passing under a max-width of 1100px, we get with mobile view. Categories and filters are displayed sticky after clicking the menu icon on the Shoppy logo's left side. 
