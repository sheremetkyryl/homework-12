const user = {
    hobby: "ride a bicycle",
    premium: true,
}
user.mood = "happy";
user.hobby = "skydriving";
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`)
}