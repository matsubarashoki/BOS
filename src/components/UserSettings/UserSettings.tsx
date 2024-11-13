import { useAuth } from "../../route/routeAuthHooks"

import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
const UserSettings = () => {

    const { user } = useAuth()
    return (
        <Grid container spacing={2}>
            <Grid size={12} sx={{ display: "flex" }}>

                <TextField

                    label="姓"
                    type="text"
                    fullWidth

                    name="lastName"




                    margin="normal"
                    sx={{ paddingX: 1 }}
                />



                <TextField

                    label="名"
                    type="text"
                    fullWidth


                    margin="normal"
                    sx={{ paddingX: 1 }}
                />

            </Grid>
            <Grid size={12} sx={{ display: "flex" }}>
                <TextField

                    label="姓カナ"
                    type="text"
                    fullWidth
                    margin="normal"
                    sx={{ paddingX: 1 }}
                />
                <TextField

                    label="名カナ"
                    type="text"
                    fullWidth
                    margin="normal"
                    sx={{ paddingX: 1 }}
                />

            </Grid>
            <TextField

                label="ローマ字名"
                type="text"
                fullWidth
                margin="normal"
                sx={{ paddingX: 1 }}
            />

            <Grid size={12} sx={{ display: "flex" }}>
                <TextField

                    label="生年月日"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    sx={{ paddingX: 1 }}
                />
                <TextField

                    label="年齢"
                    type="number"
                    margin="normal"
                    //value={field.value === 0 ? "" : field.value}
                    sx={{ paddingX: 1 }}
                    onChange={(e) => {
                        const newValue = parseInt(e.target.value, 10) || 0;
                        field.onChange(newValue);
                    }}
                />
                <TextField

                    label="入社日"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    sx={{ paddingX: 1 }}
                />

            </Grid>
            <Grid size={12} sx={{ display: "flex" }}>
                <TextField

                    label="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    sx={{ paddingX: 1 }}
                />



            </Grid>
            <Grid size={12} sx={{ display: "flex" }}>
                <TextField
                    {...field}
                    label="phone"
                    type="phone"
                    fullWidth
                    margin="normal"
                    sx={{ paddingX: 1 }}
                />

            </Grid>
            <TextField
                {...field}
                label="部署"
                type="text"
                fullWidth
                margin="normal"
                sx={{ paddingX: 1 }}
            />

            <Grid size={12} sx={{ display: "flex" }}>
                <TextField

                    label="役職"
                    type="text"
                    fullWidth
                    margin="normal"
                    sx={{ paddingX: 1 }}
                />

            </Grid>
        </Grid>

    )
}

export default UserSettings