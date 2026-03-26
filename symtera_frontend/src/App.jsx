import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
const HomeSub1 = () => <div>Home Sub 1 Page</div>;
const HomeSub2 = () => <div>Home Sub 2 Page</div>;
const HomeSub3 = () => <div>Home Sub 3 Page</div>;
const HomeSub4 = () => <div>Home Sub 4 Page</div>;
const Products = () => <div>Products & Services Page</div>;
const ProductSub1 = () => <div>Product Sub 1 Page</div>;
const ProductSub2 = () => <div>Product Sub 2 Page</div>;
const Cloud = () => <div>Cloud Services Page</div>;
const CloudSub1 = () => <div>Cloud Sub 1 Page</div>;
const CloudSub2 = () => <div>Cloud Sub 2 Page</div>;
const CloudSub3 = () => <div>Cloud Sub 3 Page</div>;
const CloudSub4 = () => <div>Cloud Sub 4 Page</div>;
const CloudSub5 = () => <div>Cloud Sub 5 Page</div>;
const Partners = () => <div>Partners & Clients Page</div>;
const PartnerSub1 = () => <div>Partner Sub 1 Page</div>;
const PartnerSub2 = () => <div>Partner Sub 2 Page</div>;
const PartnerSub3 = () => <div>Partner Sub 3 Page</div>;
const PartnerSub4 = () => <div>Partner Sub 4 Page</div>;
const PartnerSub5 = () => <div>Partner Sub 5 Page</div>;
const PartnerSub6 = () => <div>Partner Sub 6 Page</div>;
const Solutions = () => <div>Solutions Page</div>;
const Contact = () => <div>Contact Us Page</div>;


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home/sub1" element={<HomeSub1 />} />
          <Route path="/home/sub2" element={<HomeSub2 />} />
          <Route path="/home/sub3" element={<HomeSub3 />} />
          <Route path="/home/sub4" element={<HomeSub4 />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/sub1" element={<ProductSub1 />} />
          <Route path="/products/sub2" element={<ProductSub2 />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/cloud/sub1" element={<CloudSub1 />} />
          <Route path="/cloud/sub2" element={<CloudSub2 />} />
          <Route path="/cloud/sub3" element={<CloudSub3 />} />
          <Route path="/cloud/sub4" element={<CloudSub4 />} />
          <Route path="/cloud/sub5" element={<CloudSub5 />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/sub1" element={<PartnerSub1 />} />
          <Route path="/partners/sub2" element={<PartnerSub2 />} />
          <Route path="/partners/sub3" element={<PartnerSub3 />} />
          <Route path="/partners/sub4" element={<PartnerSub4 />} />
          <Route path="/partners/sub5" element={<PartnerSub5 />} />
          <Route path="/partners/sub6" element={<PartnerSub6 />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;