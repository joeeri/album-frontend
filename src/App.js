import './App.css';
import { AppBar, Container, Link, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlbumOverview } from "./components/AlbumOverview";
import AlbumDetail from "./components/AlbumDetail";
import CreateAlbum from "./components/CreateAlbum";

const useStyles = makeStyles(theme =>({ toolbar: theme.mixins.toolbar}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <AppBar position={"sticky"}>
                <Toolbar>
                    <Typography variant="h6">
                        <Link href="/" color="inherit">Albums</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.toolbar}/>
                <Container>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"} element={<AlbumOverview/>}>
                            </Route>
                            <Route path="/:albumId" element={<AlbumDetail />}>
                            </Route>
                            <Route path="/new" element={<CreateAlbum />}>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Container>
            </main>
        </div>
    );
}

export default App;
