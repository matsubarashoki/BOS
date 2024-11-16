import { useAuth } from "../../route/routeAuthHooks"

import { Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
const UserSettings = () => {

    const { user } = useAuth()
    return (
        <Container>
            <Box sx={{ bgcolor: "#fff",margin:1 }}>
                <Grid container spacing={2}>
                    <Grid size={12} sx={{ display: "flex" }}>

                        <TextField
                            label="姓"
                            type="text"
                            fullWidth
                            value={user?.lastName}
                            name="lastName"
                            margin="normal"
                            sx={{ paddingX: 1 }}
                        />

                        <TextField
                            label="名"
                            type="text"
                            fullWidth
                            value={user?.firstName}
                            margin="normal"
                            sx={{ paddingX: 1 }}
                        />

                    </Grid>
                    <Grid size={12} sx={{ display: "flex" }}>
                        <TextField
                            label="姓カナ"
                            type="text"
                            value={user?.lastNameKane}
                            fullWidth
                            margin="normal"
                            sx={{ paddingX: 1 }}
                        />
                        <TextField
                            label="名カナ"
                            type="text"
                            value={user?.firstNameKana}
                            fullWidth
                            margin="normal"
                            sx={{ paddingX: 1 }}
                        />

                    </Grid>
                    <TextField
                        label="ローマ字名"
                        type="text"
                        value={user?.romanName}
                        fullWidth
                        margin="normal"
                        sx={{ paddingX: 1 }}
                    />

                    <Grid size={12} sx={{ display: "flex" }}>
                        <TextField
                            label="生年月日"
                            type="date"
                            value={user?.dateOfBirth}
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            sx={{ paddingX: 1 }}
                        />
                        <TextField
                            label="年齢"
                            type="number"
                            margin="normal"
                            value={user?.age}
                            sx={{ paddingX: 1 }}

                        />
                        <TextField
                            label="入社日"
                            type="date"
                            value={user?.dateOfEmployment}
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
                            value={user?.email}
                            fullWidth
                            margin="normal"
                            sx={{ paddingX: 1 }}
                        />



                    </Grid>
                    <Grid size={12} sx={{ display: "flex" }}>
                        <TextField
                            label="phone"
                            type="phone"
                            fullWidth
                            value={user?.phone}
                            margin="normal"
                            sx={{ paddingX: 1 }}
                        />

                    </Grid>
                    <TextField
                        label="部署"
                        type="text"
                        fullWidth
                        value={user?.department}
                        margin="normal"
                        sx={{ paddingX: 1 }}
                    />

                    <Grid size={12} sx={{ display: "flex" }}>
                        <TextField
                            label="役職"
                            type="text"
                            fullWidth
                            value={user?.position}
                            margin="normal"
                            sx={{ paddingX: 1 }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default UserSettings