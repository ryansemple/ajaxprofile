IF OBJECT_ID('FriendRelated') IS NOT NULL
DROP TABLE FriendRelated;
GO

IF OBJECT_ID('Position') IS NOT NULL
DROP TABLE Position;

GO 

IF OBJECT_ID('Education') IS NOT NULL
DROP TABLE Education;

GO 

IF OBJECT_ID('Photo') IS NOT NULL
DROP TABLE Photo;

GO 

IF OBJECT_ID('Work_History') IS NOT NULL
DROP TABLE Work_History;

GO 

IF OBJECT_ID('Post') IS NOT NULL
DROP TABLE Post;

GO

IF OBJECT_ID('UserProfile') IS NOT NULL
DROP TABLE UserProfile;

GO

CREATE TABLE UserProfile(
	UserId INT IDENTITY(1,1) PRIMARY KEY,
	DOB DATE NOT NULL,
	LastName VARCHAR(30) NOT NULL,
	FirstName VARCHAR(30) NOT NULL,
	Biography VARCHAR(1000),
	ProfilePhoto VARCHAR(255),
	AlbumName VARCHAR(30),
	AlbumAllPublished BIT DEFAULT 0
);

CREATE TABLE FriendRelated(
	UserIdPrimary INT,
	UserIdSecondary INT,
	FriendConfirm bit(1),
	FOREIGN KEY (UserIdPrimary) REFERENCES UserProfile(UserId),
	PRIMARY KEY (userIdPrimary, UserIdSecondary)
);

CREATE TABLE Post(
	PostId INT IDENTITY(1,1) PRIMARY KEY,
	PostContent VARCHAR(4000) NOT NULL,
	LikeToken BIT DEFAULT 0,
	UserId INT,
	FOREIGN KEY (UserId) REFERENCES ryanajaxuser.UserProfile (UserId) 
);

CREATE TABLE Photo(
	PhotoId INT IDENTITY(1,1) PRIMARY KEY,
	PhotoName VARCHAR(50),
	LikeToken BIT DEFAULT 0,
	Published BIT DEFAULT 0,
	UserId INT,
	FOREIGN KEY (UserId) REFERENCES ryanajaxuser.UserProfile (UserId)
);

CREATE TABLE Work_History(
	CompanyName VARCHAR(255),
	UserId INT,
	StartDate TIME NOT NULL,
	EndDate TIME,
	CurrentJob BIT DEFAULT 0
	FOREIGN KEY (UserId) REFERENCES ryanajaxuser.UserProfile (UserId),
	PRIMARY KEY (CompanyName, UserId)
);

CREATE TABLE Position(
	JobTitle VARCHAR(100),
	CompanyName VARCHAR(255),
	UserId INT,
	FOREIGN KEY (CompanyName, UserId) REFERENCES ryanajaxuser.Work_History (CompanyName, UserId),
	PRIMARY KEY (JobTitle, CompanyName, UserId)
);

CREATE TABLE Education(
	School VARCHAR(100) NOT NULL,
	Education_Level VARCHAR(20) NOT NULL,
	Department VARCHAR(100) NOT NULL,
	Program VARCHAR(100) NOT NULL,
	UserId INT,
	FOREIGN KEY (UserId) REFERENCES ryanajaxuser.UserProfile (UserId),
	PRIMARY KEY (School, Education_Level, Department, Program, UserId)
);



