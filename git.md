## Cấu hình tên 
> git config --global user.name "Vu Nguyen"

## Cấu hình email
> git config --global user.email "tanvumbs@yahoo.com"

## Xem list
> git config --list

## Tạo repository: git init
> git init
=> nhánh chính: master

> git init -b main
=> tạo repo local nhánh chính là main

# Remote repo của local và github
> git remote add origin https://github.com/tanvugithub/crypto.git

# Cài extension:
1. git lens
2. git history

# Thêm file vào staging
> git add .  => tất cả file trong folder hiện tại
> git add -A => tất cả file trong dự án
> git add <đường dẫn file cụ thể>

## ghi chú: 
### working directory (file màu đỏ)
### staging (file màu xanh)

# Commit -> mỗi commit có id 
> git commit -m "message"

# Xem lại log commit
> git log

# Git push -u origin <master | main>   -> lần đầu
# lần thứ 2 trở đi chỉ cần: git push

# Sau khi git add, muốn đưa về lại working directory
> git reset
> git restore -S . --> (đưa all file đang staging về working directory)
> git restore -S <file path> chỉ đưa duy nhất file chỉ định về working directory

# git checkout <file path>
=> đưa 1 file đang chỉnh sửa về trạng thái trước đó

# git checkout -b <tên nhánh>
=> tạo nhánh mới và chuyển qua nhánh mới

# git checkout <tên nhánh>
=> chuyển nhánh (không có -b)
# branch
// dev => kiểm thử QA & DEV (dev)
//staging  => QA kiểm thử 1 lần (staging)
// production => end user (main / release)

> git branch <tên nhánh>    
=> tạo ra nhánh mới
=> nhánh mới chứa toàn bộ code của nhánh đang đứng
ví dụ:
> git branch feature/login

> git branch -a or git branch
=> liệt kê tất cả các branch đang có trong repository

> git switch <tên nhánh> 
=> chuyển nhánh

# git pull
=> đồng bộ code từ remote về local ứng với nhánh đang đứng
- trường hợp pull báo lỗi thì gõ:
> git pull --no-ff

# git clone <repo url>
=> clone toàn bộ code từ repo về máy
<<<<<<< HEAD

# git merge <branch>
- merge branch vào branch hiện tại
1. TH1: merge thành công nếu không conflict
2. TH2: bị xung đột => giải quyết conflict => add => commit
3. nếu merge code mà bị conflict => có thể hủy merge bằng lệnh: git merge --abort

# git reset <commit id>
=> trở về commit chỉ định.

# git push  -f
=> ghi đè và push đè lên commit trước đó lên repo