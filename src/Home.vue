<template>
    <div>
        <h1 class="m-5">Alert Boxes</h1>
        <Alert />
        <h1 class="m-5">Buttons</h1>
        <Buttons />
        <h1 class="m-5">Tables-1</h1>
        <LightTable />
        <h1 class="m-5">Tables-2</h1>
        <ShoppingTable />
        <h1 class="m-5">Tables-3</h1>
        <StripedCheckbox />
        <h1 class="m-5">Inputs</h1>
        <Inputs />
        <h1 class="m-5">Progress-Pagination</h1>
        <ProgressPagination />
        <h1 class="m-5">DropDowns single & multi select ,TextArea(static) & Tags</h1>
        <DropDowns />
        <h1 class="m-5">Custom Controls ----- Checkboxes,Radio,Toggle Buttons,Slisers</h1>
        <CustomControls />
        <h1 class="m-5">Spinners</h1>
        <Spinners />
        <h1 class="m-5">Labels</h1>
        <Labels />
        <h1 class="m-5">JavascriptComponents</h1>
        <Modals />
        <h1 class="m-5">FileUpload</h1>
        <FileUpload />
        <h1 class="m-5">DatePicker</h1>
        <Datepicker />
        <h1 class="m-5">TooltipsPopovers</h1>
        <TooltipsPopovers />
        <h1 class="m-5">Cards</h1>
        <Cards />
        <h1 class="m-5">Tables One</h1>
        <Tables />
        <!-- second template start -->
        <!-- dashbord folder -->
        <h1>Second Temp- Charts</h1>
        <Charts />
        <h1>DashBords Defaults</h1>
        <Default />
        <h1>Automotive</h1>
        <Automotive />
        <h1>SmartHome</h1>
        <SmartHome />
        <!-- Example Folder -->
        <h1>Calender</h1>
        <Calender />
        <!-- pages folder -->
        <h1>SweetAlerts</h1>
        <SweetAlerts />
        <h1>Charts</h1>
        <Chart2 />
        <!-- pages--User Folder -->
        <h1>NewUser</h1>
        <NewUser />
        <h1>Reports</h1>
        <Reports />
        <!-- pagees-account  -->
        <h1>Billing</h1>
        <Billing/>

        <h1> SideNav</h1>
        <!-- <Index/> -->
    </div>
</template>
<script>
import Alert from "./components/Alert.vue";
import Buttons from "./components/Buttons.vue";
// tables import
import LightTable from "./components/Tables/LightTable.vue"
import ShoppingTable from "./components/Tables/ShoppingTable.vue"
import StripedCheckbox from "./components/Tables/StripedCheckbox.vue"
// 
import Inputs from "./components/Inputs.vue"
import DropDowns from "./components/DropDowns.vue";
import ProgressPagination from "./components/ProgressPagination.vue"
import CustomControls from "./components/CustomControls.vue"
import Spinners from "./components/Spinners.vue"
import Labels from "./components/Labels.vue"
//Javascript Modals
import Modals from "./components/JavascriptComponents/Modals"
import FileUpload from "./components/JavascriptComponents/FileUpload"
import Datepicker from "./components/JavascriptComponents/Datepicker"
import TooltipsPopovers from "./components/JavascriptComponents/TooltipsPopovers"
// 
import Cards from "./components/Cards.vue";
import Tables from "./components/Tables.vue"

//Second template import export statment
import Charts from "./components/Charts.vue";
import Default from "./components/dashboards/Default.vue"
import Automotive from "./components/dashboards/Automotive.vue";
import SmartHome from "./components/dashboards/SmartHome.vue"
// Calender 'folder'
import Calender from "./examples/Calendar.vue"
// pages folder
import SweetAlerts from "./pages/SweetAlerts.vue"
import Chart2 from "./pages/Charts.vue"
//Users Folder
import NewUser from "./pages/Users/NewUser.vue"
import Reports from "./pages/Users/Reports.vue"
//Account Folder
import Billing from "./pages/Account/Billing.vue"
//SideNav
// import Index from "./examples/Sidenav/index.vue"
export default {
    components: {
        Alert,
        Buttons,
        LightTable,
        ShoppingTable,
        StripedCheckbox,
        Inputs,
        ProgressPagination,
        DropDowns,
        CustomControls,
        Spinners,
        Labels,
        Modals,
        FileUpload,
        Datepicker,
        TooltipsPopovers,
        Cards,
        Tables,
        // second template start...

        
        Charts,
        Default,
        Automotive,
        SmartHome,
        Calender,
        SweetAlerts,
        Chart2,
        NewUser,
        Reports,
        Billing,
        // Index

    },
};
</script>
  