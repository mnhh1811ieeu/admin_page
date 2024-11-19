import React from 'react';
import DashboardBox from '../Dashboard/components/dashboardBox';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { GiStarsStack } from "react-icons/gi";
import FormControl from '@mui/material/FormControl';
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";
const Products = () => {

    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor =
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[800];
        return {
            backgroundColor,
            height: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
        };
    });


    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showBy, setshowBy] = React.useState('');
    const [showBysetCatBy, setCatBy] = React.useState('');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return <div>
        <>

            <div className="right-content w-100">
                <div className='card shadow border-0 w-100 flex-row p-4'>
                    <h5 className='mb-0 '> DANH SÁCH SẢN PHẨM</h5>
                    <Breadcrumbs aria-label="breadcrumb" className='ml-auto breadcrumbs_'>
                        <StyledBreadcrumb
                            components="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />} />
                        <StyledBreadcrumb
                            components="a"
                            label="Products"
                            href="#"
                          
                        />
                        <StyledBreadcrumb
                            label="Product Upload"
                        />
                    </Breadcrumbs>
                </div>
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<LuShoppingBag />} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />
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
                                    onChange={(e) => setshowBy(e.target.value)}
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
                                    onChange={(e) => setCatBy(e.target.value)}
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
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
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
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
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
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
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
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
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
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
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
                                            <Link to="/product/details">
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
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
                                        <Link to="/product/details">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
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
                                        <Link to="/product/details">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            </Link>
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
    </div>;
};

export default Products;
