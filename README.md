# comp231-S3G2
## Setting up a development environment
Assuming you are installing on Windows follow the below steps.
### Install Ubuntu
Enter "Microsoft Store" in the Windows search bar. Then, search for "Ubuntu", which is a distribution of Linux. Click on "Ubuntu" without the version numbers, and click "Get". Using the windows search bar, search for "Ubuntu" and click it. You may have to follow steps one and two on the following link: [Install Ubuntu with WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

### Setup Ubuntu
Next, enter your preferred username and password for when you login. Then run the following command ```cd /mnt/c/Users/YOUR_USER_NAME/Desktop```. Then run ```git clone https://github.com/Hassan-Shabbir/comp231-S3G2 && cd comp231-S3G2```. You should now have the project downloaded in this folder, which you can check with ```ls```.

### Install Node.js and npm
Now run ```sudo apt update``` and then ```sudo apt install nodejs npm``` to install node (JavaScript server) and npm (the Node package manager). When it asks if you wish to install, press "y" then enter.

### Install expo-cli for React Native
Install expo-cli by running ```sudo npm install -g expo-cli``` and enter your Ubuntu password, then ignore any deprecation warnings.
