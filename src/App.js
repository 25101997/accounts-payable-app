import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import InvoiceTable from './components/InvoiceTable';
import { Routes, Route } from 'react-router-dom';
import InvoiceForm from './components/InvoiceForm';
import InvoiceEdit from './components/InvoiceEdit';
import InvoiceView from './components/InvoiceView';
import SupplierTable from './components/SupplierTable';
import PaymentRecordTable from './components/PaymentRecordTable';
import CancelModifyPaymentRecordTable from './components/CancelModifyPaymentRecordTable';
import SupplierForm from './components/SupplierForm';
import LatePaymentTable from './components/LatepaymentsTable';
import PaymentPassword from './components/PaymentPassword';
import PaymentApproval from './components/PaymentApproval';
import ReportMenu from './components/ReportMenu';

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} > </Route>
        <Route path="/invoices" element={<InvoiceTable />} > </Route>
        <Route path="/invoice-form" element={<InvoiceForm />} > </Route>
        <Route path="/invoice-edit/:id" element={<InvoiceEdit />} > </Route>
        <Route path="/invoice-view/:id" element={<InvoiceView />} > </Route>
        <Route path="/suppliers" element={<SupplierTable />} > </Route>
        <Route path="/supplier-form" element={<SupplierForm />} > </Route>
        <Route path="/payments-record" element={<PaymentRecordTable />} > </Route>
        <Route path="/cancel-modify-payments-record" element={<CancelModifyPaymentRecordTable />} > </Route>
        <Route path="/late-payment-table" element={<LatePaymentTable />} > </Route>
        <Route path='/payment-password' element={<PaymentPassword />} > </Route>
        <Route path='/payment-approval' element={<PaymentApproval />} > </Route>
        <Route path='/report-menu' element={<ReportMenu />} > </Route>
      </Routes>
      
    </div>
  );
}

export default App
