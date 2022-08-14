import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ThemeState {
    value: "light" | "dark" | "newMoon"
}

function getTheme (): "light" | "dark" | "newMoon" {
    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark" || theme === "newMoon") {
        return theme;
    } else {
        return "dark";
    }
}

function setTheme (value: "light" | "dark" | "newMoon"): void {
    localStorage.setItem("theme", value);
}

const initThemeState: ThemeState = { value: getTheme() };

const themeSlice = createSlice({
    name: "theme",
    initialState: initThemeState,
    reducers: {
        changeTheme: state => {
            if (state.value === "newMoon") {
                state.value = "light";
            } else if (state.value === "light") {
                state.value = "dark";
            } else {
                state.value = "newMoon";
            }
            setTheme(state.value);
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
