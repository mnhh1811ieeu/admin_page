import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from'@mui/icons-material/ExpandMore';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdCloudUpload } from "react-icons/md";


const StyledBreadcrumb = styled( Chip) ( ({ theme }) => {
    const backgroundColor = 
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return{
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

const ProductUpload = () => {
    const [categoryVal, setCategoryVal] = useState('');
    const [ ratingsValue , setRatingValue] = useState(1);

    const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };
  return (
    <>
        <div className='right-content w-100'>
            <div className='card shadow border-0 w-100 flex-row p-4'>
                <h5 className='mb-0 '> ProductUpload</h5>
                <Breadcrumbs aria-lable="breadcrumb" className='ml-auto breadcrumbs_'>
                    <StyledBreadcrumb 
                        components="a"
                        href="#"
                        label="Dashboard"
                        icon={<HomeIcon fontSize="small" />} />
                    <StyledBreadcrumb 
                        components="a"
                        lable="Products"
                        href="#"
                        deleteIcon={ <ExpandMoreIcon/>}
                        />
                    <StyledBreadcrumb 
                        lable="Product Upload"
                        
                        deleteIcon={ <ExpandMoreIcon/>}
                        />
                </Breadcrumbs>
            </div>
            
            <form className='form'>
                <div className='row'>
                    <div className='col-sm-9'>
                        <div className='card p-4'>
                            <h5 className='text-white mb-4'> basic</h5>
                            
                            <div className='form-group'>
                                <h6> TITLE</h6>
                                <input type='text' name="name" />
                            </div>

                            <div className='form-group'>
                                <h6> Description</h6>
                                <textarea rows={5} cols={10} />
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>Category</h6>

                                        <Select
                                            value={categoryVal}
                                            onChange={handleChangeCategory}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className='w-100'
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem className='text-capitalize'>Nam</MenuItem>
                                            <MenuItem className='text-capitalize'>Nữ</MenuItem>
                                            <MenuItem className='text-capitalize'>Trẻ em</MenuItem>
                                        </Select>
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>Brand</h6>

                                        <Select
                                            value={categoryVal}
                                            onChange={handleChangeCategory}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className='w-100'
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem className='text-capitalize'>Jeans</MenuItem>
                                            <MenuItem className='text-capitalize'>Áo phông</MenuItem>
                                            
                                            
                                        </Select>
                                    </div>
                                </div>

                                
                            </div>


                            <div className='row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>regular price</h6>
                                        <input type='text' />
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>discount price</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>rating</h6>
                                        <Rating
                                            name="simple-controlled"
                                            value={ratingsValue}
                                            onChange={(event, newValue) => {
                                            setRatingValue(newValue);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='form-group'>
                                        <h6>product stock</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <Button className='btn-blue btn-lg btn-big'><MdCloudUpload /> &nbsp; PUBLISH AND VIEW</Button>
                            
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </>
  )
}

export default ProductUpload