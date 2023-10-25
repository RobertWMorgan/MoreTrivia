
// export const darkToggle = () => {
//     if (isDark === "lightmode") {
//       setIsDark("darkmode")
//     } else setIsDark("lightmode")
//   }



// If statements to check which mode then reutrning the correct class

export const checkDarkBg = (isDark) => {
    if (isDark === "lightmode"){
        return "background-lightmode"
    } else return "background-darkmode"
}

export const checkDark = (isDark) => {
    if (isDark === "lightmode"){
        return "lightmode"
    } else return "darkmode"
}