import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext, useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import classes from '../utils/classes';
import { getError } from '../utils/error';

import axios from 'axios';
import { useRouter } from 'next/router';

import { Box, Container, IconButton, InputBase, Grid } from '@mui/material';

import { Store } from '../utils/Store';

export default function search({ title, description, children }) {
  const { state, dispatch } = useContext(Store);

  const router = useRouter();

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        marginBottom={2}
      >
        <form onSubmit={submitHandler}>
          <Box sx={classes.searchForm}>
            <InputBase
              name="query"
              sx={classes.searchInput}
              placeholder="Buscar productos"
              onChange={queryChangeHandler}
            />
            <IconButton
              type="submit"
              sx={classes.searchButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </form>
      </Grid>
    </>
  );
}
