import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import classes from '../utils/classes';

import { useRouter } from 'next/router';

import { Box, IconButton, InputBase, Grid } from '@mui/material';

export default function Search() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

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
