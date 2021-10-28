
## HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY - HO CHI MINH NATIONAL UNIVERSITY
## SOFTWARE ENGINEERING PROJECT - SEMESTER 211
# Restaurant POS System 2.0

**Contains:**
* [About the team](#about-the-team)
* [Project Introduction](#project-introduction)
* [Installation](#installation)

### About the team

<table>
    <tr>
        <th>Name</th>
        <td>Order Food</td>
    </tr>
    <tr>
        <th>Phạm Văn Minh Toàn</th>
        <td>1953028</td>
    </tr>
    <tr>
        <th>Hoàng Hà Giang</th>
        <td>1952659</td>
    </tr>
    <tr>
        <th>Tiêu Viết Trọng Nghĩa</th>
        <td>1852611</td>
    </tr>
    <tr>
        <th>Nguyễn Khương</th>
        <td>1952310</td>
    </tr>
    <tr>
        <th>Trần Quốc Duy</th>
        <td>1952214</td>
    </tr>
</table>

### Project Introduction

In this project, we developed a web-based POS system for restaurants systems. 

**Point of sale** (POS) or **point of purchase** (POP) is the time and place where a retail transaction is completed.
At the POS, the merchant calculates the amount owed by the customer, indicates that amount, may prepare an invoice for the customer, and indicates the options for the customer to make payment.
A restaurant POS system is a system of hardware and software that work together to handle workflow and transactions for a food and beverage business.

Even before the COVID-19 crisis, POS systems had sprung up everywhere across the industry.
During the Covid-19 pandemic, restaurants are facing greater peril than ever, modern restaurant POS systems are expected to help a restaurant thrive in many ways:
* Increase sales
* Improve customers experience
* Inform owners’ business decisions
* Reduce wasted effort
* Opportunity to scale to a large business

Many of the specific benefits within these categories are interconnected.
Make more informed business decisions, and your service will likely improve.
Improve your service, and your sales will see a boost as well – a happy domino effect that makes running a better business that much easier.

POS systems provide customers with a restaurant in their pockets, with simple and indirect access to all the restaurant services anywhere, at any time, which brings huge convenience.
This raises a plus point on customers’ mentality who concerns about health during COVID-19 pandemic.

This project's documentation comes with the following files:
* README.md
* requirements.md
* System-modelling.md
* Architectural Design.md
* Folder of diagrams

### Installation
Hướng dẫn khởi tạo môi trường trên Linux:

Bước 1: Cài đặt PHP và MySQL <br>
<code>apt-get install mysql-server </code> <br>
<code>sudo apt install php7.4 php7.4-common php7.4-cli php7.4-xml php7.4-curl php7.4-json php7.4-gd php7.4-mbstring php7.4-intl 
php7.4-bcmath php7.4-bz2 php7.4-readline php7.4-zip php7.4-mysql</code><br>
Bước 1b: Cài đặt composer<br>
<code> curl -sS https://getcomposer.org/installer | php </code><br>
<code> mv composer.phar /usr/bin/composer</code> <br>

Bước 2a: Kéo repo về <br>
Bước 2b: Di chuyển vào thư mục vừa kéo về <br>
<code>cd CRM-System</code><br>
Bước 2c: Tải vendors về <br>
<code>composer install</code><br>

Bước 3: Copy file .env<br>
<code>copy .env.example .env</code><br>

Bước 4: Điều chỉnh trên file .env như sau:<br>
DB_HOST=localhost<br>
DB_DATABASE=laravel<br>

Bước 5: Chạy dịch vụ mySQL trên linux<br>
<code>service mysql start</code><br>

Bước 6:Truy cập mySQL<br>
<code>mysql -u root -p</code><br>

Bước 7: Nhập lệnh dưới vào mysql CLI<br>
CREATE DATABASE laravel;<br>
exit;<br>

Bước 8: Khởi tạo database trên MySQL<br>
<code>php artisan migrate --seed</code><br>

Bước 9: Chạy web<br>
<code>php artisan serve</code><br>
