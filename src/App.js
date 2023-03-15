import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "  ";

import Home from "./components/pages/home/Home";
import Organizer from "./components/pages/organizer/Organizer";
import SignIn from "./components/pages/sign-in/SignIn";
import SignUp from "./components/pages/sign-up/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/pages/contact/Contact";
import UserRoutes from "./Routes/UserRoutes";
import UserBooking from "./Routes/UserBooking";
import TourRouter from "./Routes/TourRouter";
import WishList from "./components/pages/wishList/WishList";
import BlogRouter from "./Routes/BlogRouter";
import AdminMainRoute from "./admin/routes/AdminMainRoute";
import Tourbooking from "./Routes/TourBooking";
import BookingFormTabs from "./components/pages/BookingFormTabs";

const notFound404 = () => {
  return <h1>!404 Page Not Found</h1>;
};
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Account/*" element={<UserRoutes />} />

        <Route path="/Booking/*" element={<UserBooking />} />
        <Route path="/Tour-Booking/:_id/*" element={<Tourbooking />} />

        <Route path="/Tour/*" element={<TourRouter />} />

        <Route path="/Blog/*" element={<BlogRouter />} />

        <Route path="/Wishlist" element={<WishList />} />

        <Route path="/Organizer/:id" element={<Organizer />} />

        <Route path="/Booking/" element={<BookingFormTabs/>} />

        <Route path="/signIn" element={<SignIn />} />

        <Route path="/signUp" element={<SignUp />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/Admin/*" element={<AdminMainRoute />} />

      </Routes>
    </Router>
  );
}

export default App;
