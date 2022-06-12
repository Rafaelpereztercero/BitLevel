# BitLevel Charge Script

-- CREAMOS LA BASE DE DATOS
DROP DATABASE IF EXISTS Bitlevel;
CREATE DATABASE BitLevel;

-- SELECCIONAMOS LA BASE DE DATOS
use BitLevel;

-- 1 TABLA PARA LOS USUARIOS REGISTRADOS
Create table if not exists  UserRegistered (

idVault int, # ID DE LA BILLETERA
tempToken varchar(20), # TOKEN PARA LOGIN CON COOKIES
tokenDate varchar(20), # FECHA DE EXPIRACIÓN DEL TOKEN
username varchar(20), # NOMBRE DE USUARIO
password varchar(30), # CONTRASEÑA DEL USUARIO
mail varchar(45), # MAIL DEL USUARIO
attempts int, # INTENTOS DE INICIO DE SESIÓN
mailOtp varchar(25), # CÓDIGO DE VERIFIACIÓN PARA AUTENTICAR EL INICIO DE SESIÓN POR CORREO
imageProfile LONGBLOB, # IMAGEN DEL PERFIL DEL USUARIO
creationDate date, # FECHA DE CREACIÓN DE LA CUENTA
premium bool, # BOOLEANO PARA COMPROBAR SI UN USUARIO ES PREMIUM O NO
description varchar(255), # DESCRIPCION DEL USUARIO
dailyQuest date, # FECHA DE CLAIM DEL DAILY REWARD
primary key(idVault) # PRIMARY KEY

);

-- 2 TABLA PARA LOS TOKENS DE LAS DEMO
Create table if not exists Transactions (
	
    transactionID int, # ID DE LA TRANSACCIÓN
    idVault int, # ID DE LA BILLETERA
    transactionDate date, # FECHA DE LA TRANSACCIÓN
    transactionAmount float, # CANTIDAD TRASPASADA EN LA TRANSACCIÓN
    transactionAmountFees varchar(20), # CANTIDAD TRASPASADA EN LA TRANSACCIÓN
    coinPrice float, # CANTIDAD TRASPASADA EN LA TRANSACCIÓN
    transactionCoin varchar(35), # TIPO DE MONEDA TRASPASADA EN LA TRANSACCIÓN
    transactionDestination varchar(45), # DESTINO DE LA TRANSACCIÓN
    transactionSource varchar(45), # EMITENTE DE LA TRANSACCIÓN
    transactionDescription varchar(255), # DESCRIPCIÓN DE LA TRANSACCIÓN
    benefits varchar(20), # GANANCIAS AL VENDER
    fees varchar(20), # COMISIONES
    method varchar(20), # METODO DE PAGO
    primary key(transactionID),  # PRIMARY KEY
    foreign key(idVault) REFERENCES UserRegistered(idVault) ON DELETE SET NULL # FOREIGN KEY
    

);

-- 3 TABLA PARA LAS CRYPTOS DE LOS USUARIOS
Create table if not exists UserCryptos (

	id int, # IDENTIFICADOR
	idVault int, # ID DE LA BILLETERA
    cryptoTag varchar(999), # TAG DE LA CRYPTO
    cryptoAmount float, # CANTIDAD DE CRYPTO
    primary key(id),  # PRIMARY KEY
    foreign key(idVault) REFERENCES UserRegistered(idVault)  ON DELETE SET NULL # FOREIGN KEY

);

-- 4 TABLA PARA LOS ADMINS
Create table if not exists UserAdmin (
	
adminID varchar(20), # ID DE USUARIO ADMIN
password varchar(30), # CONTRASEÑA
mail varchar(45), # CORREO
attempts int, # INTENTOS DE INICIO DE SESION
mailOtp varchar(25), # CODIGO DE VERIFICACION POR MAIL
mailed int, # CONTADOR DE CÓDIGOS ENVIADOS AL MAIL
imageProfile LONGBLOB, # IAMGEN DE PERFIL
creationDate date, # FECHA DE CREACION DE LA CUENTA
descritption varchar(20), # DESCRIPCION DE LA CUENTA
primary key(adminID) # PRIMARY KEY

);

-- 5 TABLA PARA LAS VIRTUAL CARDS
Create table if not exists VirtualCards (
	
cardID int, # IDENTIFICADOR 
cardHolder varchar(20), # PROPIETARIO DE LA TARJETA
digits varchar(21), # DIGITOS DE LA TARJETA
cvc int, # CVC DE LA TARJETA
expDate date, # FECHA DE EXPIRACION DE LA TARJETA
idVault int, # ID DE LA BILLETERA
primary key(cardID), # PRIMARY KEY
foreign key (idVault) REFERENCES  UserRegistered(idVault) ON DELETE cascade # FOREIGN KEY

);

-- 6 TABLA PARA LAS COMISIONES
Create table if not exists Commissions (

id varchar(10), # IDENTIFICADOR
percent varchar(20), # PORCENTAJE DE COMISION
primary key(id) # PRIMARY KEY

);

-- TRIGGERS 

-- ESTABLECEMOS EL DELIMITTER A $$
DELIMITER $$

-- DELETE ( ELIMINA LAS CRYPTOS DEL USUARIO )
DROP TRIGGER IF EXISTS UpdateUserId $$
CREATE TRIGGER UpdateUserId BEFORE DELETE ON userregistered
for each row
begin
	delete from usercryptos where idVault = old.idVault;
end $$

-- UPDATE ( ELIMINA LAS CRYPTOS CON CANTIDAD MENOR O IGUAL A 0 )
DROP TRIGGER IF EXISTS UpdateUserCrypto $$
CREATE TRIGGER UpdateUserCrypto AFTER UPDATE ON usercryptos
for each row
begin
	if (new.cryptoAmount <= 0) then 
    delete from cryptoAmount where idVault = new.idVault and cryptoTag != 'usd';
    end if;
end $$

-- INSERT ( ESTABLECE A 0 EL FIAT DEL USUARIO )
DROP TRIGGER IF EXISTS AddFiat $$
CREATE TRIGGER AddFiat AFTER INSERT ON userregistered
for each row
begin
	Declare fiat int;
    Declare total varchar(20);
	Declare id int;
    set id = 1;
    select count(*) as quantity into fiat from userCryptos where idVault = new.idVault and cryptoTag = 'usd';
    select count(*) as quantity into total from userCryptos;
    if (total != 0 and fiat = 0) then 
	select max(id) as idCount into id from usercryptos ;
    set id = id +1;
    if ( total = 0 and fiat  = 0) then
    set id = 1;
    end if;
    end if;
    
	Insert into usercryptos VALUES (id,new.idVault,'usd',0);
    
end $$

-- ESTABLECEMOS EL DELIMITTER A ;
DELIMITER ;

-- INSERT COMMISSIONS
INSERT INTO commissions VALUES("premium","1.0%");
INSERT INTO commissions VALUES("default","5.0%");