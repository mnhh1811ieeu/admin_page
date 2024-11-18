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

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Pagination from '@mui/material/Pagination';

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
    const [showBy, setshowBy] = React.useState('');
    const [showBysetCatBy, setCatBy] = React.useState('');
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

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>Show by</h4>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={showBysetCatBy}
                                    onChange={(e) =>setshowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-simple-select-helper-label"
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>Category By</h4>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={showBy}
                                    onChange={(e) =>setCatBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-simple-select-helper-label"
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Rating</th>
                                    <th>Order</th>
                                    <th>Sales</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img className="w-100" src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731506186/1731506179653_a
                                                    b334a44-8077-4ab8-8d20-fb2750ec07581670605659229KurtaSets1.jpg"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female ...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$21.00</del>
                                        <span className="new text-danger">$21.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><FaPen /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="d-flex tableFooter">
                            <p>showing <b>12</b>of <b>60</b> results</p>
                            <Pagination className="pagination" count={25}
                             showFirstButton showLastButton color="primary" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;