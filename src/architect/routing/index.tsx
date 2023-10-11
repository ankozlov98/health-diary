import { BrowserRouter, Navigate, Outlet, Route, Routes, createBrowserRouter } from "react-router-dom";
import  { NavigationBar } from "../../blocks/Navigation";
import { Col, Row } from "reactstrap";
import MainPage from "../../pages/main-page/MainPage";
import NewsPage from "../../pages/news/NewsPage";
import HealthDiary from "../../pages/health-diary/HealthDiary";


export const Routing = () => {
  return <BrowserRouter>
  <Routes>
    <Route index={!sessionStorage.getItem('token')} element={<Navigate to="/auth" />} />
    <Route index={!!sessionStorage.getItem('token')} element={<Navigate to="/home" />} />
      <Route path="/auth" element={<div>Hello World!</div>}/>     
      <Route element={<Layout />}>
        <Route path='/home' element={<MainPage />} />
        <Route path="/diary" element={<HealthDiary />}>
           <Route path="/diary/:id" element={<></>} />
        </Route>
        <Route path="/meds" element={<div>Meds</div>} />
        <Route path="/news" element={<NewsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
}


const Layout = () => {
  return (
    <Row style={{display: 'flex', height: '100%', minHeight: '100vh'}}>
        <Col style={{width: 60, paddingTop: 12}}>
         <NavigationBar />
        </Col>
        <Col style={{width: '100%', backgroundColor: 'rgb(252, 252, 252)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black'}}>
        <Outlet />
        </Col>
    </Row>
  );
};

