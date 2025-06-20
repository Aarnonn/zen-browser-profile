# 🧘‍♂️ ZenProfile — Custom `user.js` for Zen Browser

This repo contains a personal `user.js` configuration file for the Zen Browser.

I used this to make my work browser very secure

---

## 🚀 Quick Start

### Step 1 — Clone the Repo

Open Terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/zen-user-profile.git ~/Documents/ZenProfile
````

Replace `YOUR_USERNAME` with your GitHub username.

---

### Step 2 — Edit `user.js`

The `user.js` file contains configuration overrides for Zen (Firefox).

#### To customize:

1. Open it in any code or text editor:

```bash
open -e ~/Documents/ZenProfile/user.js
```

or with VS Code:

```bash
code ~/Documents/ZenProfile/user.js
```

2. Modify settings to match your needs. Each setting is commented so you know what it does.

3. Save the file.

---

### Step 3 — Copy Your Config Into Zen (Run the Script)

The `sync-zen-profile.sh` script copies your `user.js` into Zen’s live profile directory.

#### A. Make the script executable:

```bash
chmod +x ~/Documents/ZenProfile/sync-zen-profile.sh
```

#### B. Run the script:

```bash
~/Documents/ZenProfile/sync-zen-profile.sh
```

This will:

* Pull the latest version of `user.js` from GitHub
* Copy it to Zen’s internal config folder
* Print confirmation and a timestamp

✅ Restart Zen after syncing to apply changes.

---

## 🧾 Where Does the Script Copy To?

Your Zen Browser profile lives here:

```
~/Library/Application Support/zen/Profiles/pa08o9qx.Default (release)/
```

The script will automatically copy `user.js` into this directory.

If your Zen profile path changes (you reinstall Zen, etc.), you can update the path in `sync-zen-profile.sh`:

```bash
ZEN_PROFILE_PATH="$HOME/Library/Application Support/zen/Profiles/your-new-profile-id"
```

Find your current profile in Zen by visiting `about:support`.

---

## 💡 Pro Tip: Add a Shortcut

You can add a terminal alias so you can sync with one command:

### Add to your `.zshrc` or `.bash_profile`:

```bash
alias zen-sync="~/Documents/ZenProfile/sync-zen-profile.sh"
```

Then just run:

```bash
zen-sync
```

from any terminal window.

---

## 🧱 Folder Structure

```
ZenProfile/
├── user.js                 # Your custom browser config
├── sync-zen-profile.sh     # The sync script
└── README.md               # Full usage instructions
```

---

## 📌 Notes

* Zen reads `user.js` only on startup. **Restart Zen** after syncing.
* This setup uses **Git + GitHub** so your config stays backed up and portable.
* Works on macOS. Linux support is similar (just update path syntax).
