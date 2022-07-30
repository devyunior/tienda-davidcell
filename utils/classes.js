const classes = {
  //common

  flex: {
    display: 'flex',
  },
  visible: {
    display: 'initial',
  },
  hidden: {
    display: 'none',
  },
  sort: {
    marginRight: 1,
  },
  fullHeight: { height: '100vh' },
  fullWidth: {
    width: '100%',
  },
  error: {
    color: '#f04040',
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  //layout
  main: {
    marginTop: 2,
  },
  footer: {
    marginTop: 1,
    textAlign: 'center',
  },
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  // header
  appbar: {
    backgroundColor: '#161B22',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
    search: {},
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },

  menuButton: { padding: 0 },

  // search

  searchForm: {
    border: '1px solid #EF6900',
    backgroundColor: '#ffffff',
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#EF6900',
    },
  },
  searchButton: {
    backgroundColor: '#EF6900',
    padding: 1,

    '& span': {
      color: '#000000',
    },
  },

  // review
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },

  // map
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250,
    },
  },
};

export default classes;
