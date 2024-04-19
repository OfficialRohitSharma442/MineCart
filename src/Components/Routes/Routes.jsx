import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ProductDetails from "./../Products/ProductDetails"
function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

function Routes() {
  return (
    <Routes>
      <Route path="product">
        <Route path=":productId" element={<ProductDetails />} />

      </Route>
    </Routes>
  );
}