import logo from '../logo.svg'
import { CardActions, Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const AlbumCard = (props) => {
    return (
        <Card>
            <CardActionArea component={Link} to={`/${props.id}`}>
                <CardHeader title={props.name} subheader={props.artist}/>
                <CardMedia image={logo}/>
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                        Discription test test test
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
}