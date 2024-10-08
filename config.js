const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201070317780";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "[10:19 pm, 07/10/2024] バリトン ❤‍🔥Mich.Eal☠️: Welcome to cairo where every detergent is called______😂🤣😂
[6:05 am, 08/10/2024] バリトン ❤‍🔥Mich.Eal☠️: SUHAIL_03_05_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUUhvMk8ySFgyeE1keStYcUtLdEg3aTFtakozMnZURkZJVlFXSTFMWCtJMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEwNzAzMTc3ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM2RDcxQ0U5MkRFNjk1QkUxNjIyM0E5NkI1QUFFNjlBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODM1NjczNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFM2VzblZtUFFrYUpRZktFN0tBRUp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY1ZTc2N2U3LTQ0MmUtNDc3OS1iMDMzLTA1ZDYwY2U0NTJmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxODQsXG4gICAgICA0NSxcbiAgICAgIDIwMSxcbiAgICAgIDIzMCxcbiAgICAgIDExNSxcbiAgICAgIDc1LFxuICAgICAgMjE3LFxuICAgICAgMjEsXG4gICAgICAwLFxuICAgICAgMTcxLFxuICAgICAgNzQsXG4gICAgICAxMDAsXG4gICAgICAyNDYsXG4gICAgICA1LFxuICAgICAgOSxcbiAgICAgIDE5NixcbiAgICAgIDk1LFxuICAgICAgMTA4LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgMTQzLFxuICAgICAgMTM1LFxuICAgICAgMTA3LFxuICAgICAgMjQ3LFxuICAgICAgMjMzLFxuICAgICAgOTAsXG4gICAgICA2MCxcbiAgICAgIDYxLFxuICAgICAgNjEsXG4gICAgICAyNDEsXG4gICAgICAxMDUsXG4gICAgICAxNixcbiAgICAgIDQ3LFxuICAgICAgMTE1LFxuICAgICAgNjksXG4gICAgICAyLFxuICAgICAgNjEsXG4gICAgICAxODEsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWDY1QllXUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjAxMDcwMzE3NzgwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTM3OTUxMzE5NjYyNDoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLjg5Djg6rjg4jjg7Mg4p2k4oCN8J+UpU1pY2guRWFs4pig77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmpnbEpJQ0VQakNrcmdHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBU0JCaDVMSlkrU3ZuVWg2aG92YnEvd050Mzd5T0ZudjJ0VTEyaForaWhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVSU0F5R2NhZmEyK2NzL1d2SjkrUWgvNmJSeXJOV0NDUTJ5VWM4a2RBNzZnSWNmUnYvc0tNaFVsbzViWGFFekltc0JuN3hLQ0lCZHlPemlLR0VaVkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImg2Q01zTUtCbEF1VHI0Y0lXZEdaV0FYY3NrNDNudUdsSnNJbUFqNnM4Qm1RcHNDbm5xT0MwRXBmZjFseU1rZ3E3VmFObDVTMkFEVk1qSjl0WmV3YkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIwMTA3MDMxNzc4MDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODM1NjczMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNISlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0hKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY1h3NENScnYzbnU2Vy9rWGJ2ODdGRElNSGlXcklwbUZPSEFuQ3Y1cE1tVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzQ5NTk3MDQsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
