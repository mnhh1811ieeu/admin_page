import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosTimer } from 'react-icons/io';
import React from 'react';
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";
export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];
export const options = {
    'backgroundColor': 'transparent',
    'chartArea': {
        'width': '100%', 'height': '100%',

    }

};
const Dashboard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<LuShoppingBag />} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h6 className="text-white mb-0 mt-0">Tổng danh thu</h6>
                                <div className="ml-auto">
                                    <Button className="ml-auto toggleIcon" onClick={handleClick}>
                                        <HiDotsVertical />
                                    </Button>
                                    <Menu
                                        className='dropdown_menu'
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer />Hôm qua</MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer />
                                            Tuần trước</MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer />
                                            Tháng trước</MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer />Năm trước</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <h3 className="text-white font-weight-bold"> $34,444,455</h3>
                            <p>$20,000,000 tháng trước</p>
                            <Chart
                                chartType="PieChart"
                                width='100%'
                                height='170px'
                                data={data}
                                options={options}
                            />
                        </div>

                    </div>
                </div>
                <div className='card shadow border-0 p-3 mt-4'>
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row">
                        <div className="col">
                            <h4>Show by</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;