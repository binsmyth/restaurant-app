import { useContext } from "react";
import { useTheme, useThemeUpdate } from "../../context/ThemeContext"
export const PracticeTheme = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return(
        <>
            <div style={themeStyles}>
                Change theme
            </div>
            <button onClick={toggleTheme}>Toggle theme</button>
        </>
    )
}