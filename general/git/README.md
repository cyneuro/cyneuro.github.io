# Git - A distributed version-control system

Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows. [Wikipedia](https://en.wikipedia.org/wiki/Git)

## Contents

1. [Github](#github)
2. [Obtaining a Git Client](#obtaining-a-git-client)
3. [Configuring your Git Client](#configuring-your-git-client)
4. [General Git Usage](#general-git-usage)
5. [Additional Resources](#additional-resources)

## Github

### Creating an Account

1. Visit [https://github.com/join](https://github.com/join)
2. Specify a username, enter your email address and a password and follow the steps
3. Verify your email address

### Creating a Repository

1. You'll need to have an account setup before proceeding.
2. See the most recent page at [https://help.github.com/en/articles/create-a-repo](https://help.github.com/en/articles/create-a-repo)


## Obtaining a Git client

In order to interface with github effectively you'll need a git client. From the git client you'll be able to "push" code changes from your local folders up to github for safe keeping and version control.

#### Windows

1. Visit [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download the git client and run the executable
3. Follow all on-screen instructions, the default options are usually the best.
4. You're all set! There should have "Git Bash" available in your start menu.

![](gitbash.PNG)

#### Linux

* For Debian based distributions like **Ubuntu** run the following commands from your terminal:

```bash
sudo apt update
sudo apt install git
```

* For RedHat based distributions like **Fedora** run the following commands from your terminal.

```bash
dnf -y update
dnf -y install git
```

#### Mac

1. Visit [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
2. Download the git client and run the executable
3. Follow all on-screen instructions, the default options are usually the best.


## Configuring your Git Client

Your git client will need to be configured correctly before you can push changes up to your repository. Execute the following commands from your terminal/git client to set your name and email address. Replace the sample information with your own.

```bash
git config --global user.name "sampleuser"
git config --global user.email "sampleuser@example.com"
```

To see these changes execute

```bash
git list
```

Yout should see something similar to the following:

```bash
[root@host ~]# git config --list
user.name=sampleuser
user.email=sampleuser@example.com
```

## General Git Usage

### Initializing a Directory

1. Ensure you've created a repository using the steps [here](#creating-a-repository)
2. Open git bash (terminal in linux)
3. Ensure the directory hasn't already been initialized
```
git status
```
5. If you recieve "*fatal: Not a git repository (or any of the parent directories): .git*" the repository is already being tracked.
4. Otherwise, execute the following
```
git remote add origin [web address of github repository]
git add -A
git commit -m "first commit"
git push origin master
```



### Pushing Changes up to a remote repository

1. Open git bash (terminal in linux)
2. Change your current working directory to your local repository
3. To stage a single file you've changed to be pushed up to your remote repository execute
```
git add ./file.txt
```
4. To stage all files you've changed execute
```
git add -A
```
5. To commit the tracked changes and prepare them to be pushed to a remote repository, execute the following with your choice of message (-m)
```
git commit -m "Add files"
```
6. Push your changes to the remote repository
```
git push origin master
```

If you've created a separate branch for your code, replace master with your branch name.

### Using .gitignore

To ignore certain files in your local repository and prevent your git client from seeing them take the following steps:

1. Add a *.gitignore* file to the root of your local repository
2. Add filenames to be ignored
3. Wildcard characters such as '*' are acceptable

See [https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore) for more information.
### Reseting all changes since your last commit

To revert all local changes in your local repository execute:

```
git reset --hard
```

## Additional Resources

#### References
* [https://help.github.com/en/articles/signing-up-for-a-new-github-account](https://help.github.com/en/articles/signing-up-for-a-new-github-account)
* [https://help.github.com/en/articles/create-a-repo](https://help.github.com/en/articles/create-a-repo)
* [https://git-scm.com/](https://git-scm.com/)
* [https://help.github.com/en/articles/adding-a-file-to-a-repository-using-the-command-line](https://help.github.com/en/articles/adding-a-file-to-a-repository-using-the-command-line)
