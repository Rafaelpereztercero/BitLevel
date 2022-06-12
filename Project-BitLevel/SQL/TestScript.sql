# BitLevel TEST Script
use bitlevel;

-- SET DATE VARIABLE
set @datas =  (SELECT CURRENT_DATE) ;

--  INSERT USEREGSITERED
INSERT INTO userregistered VALUES (1,null,null,'Tomas','Tomas','tribot@cifpfbmoll.eu',0,'undefined','undefined',@datas,0,'User account','00-00-00');

--  INSERT ADMIN
INSERT INTO useradmin VALUES (1,'Tomas','tribot@cifpfbmoll.eu',0,'undefined',0,'undefined',@datas,'User admin');

-- INSERT USERCRYPTO
INSERT INTO usercryptos VALUES (2,1,'eth',25);

-- INSERT TRANSACTON
INSERT INTO transactions VALUES (2,1,@datas,25,'0',120,'eth','Me','Me','Buy','-3000$','0%','Fiat');

-- INSERT VIRTUAL CARD
INSERT INTO virtualcards VALUES(1,'Tomas','1272839087654323',123,'2029-09-00',1);

