public class User {
    private int userid;
    private String userfname;
    private String userlname;
    private String userpassword;
    private String useremail;
    private String userlocation;
    private String userinsta;

    public User(int userid, String userfname, String userlname, String userpassword, String useremail, String userlocation, String userinsta) {
        this.userid = userid;
        this.userfname = userfname;
        this.userlname = userlname;
        this.userpassword = userpassword;
        this.useremail = useremail;
        this.userlocation = userlocation;
        this.userinsta = userinsta;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUserfname() {
        return userfname;
    }

    public void setUserfname(String userfname) {
        this.userfname = userfname;
    }

    public String getUserlname() {
        return userlname;
    }

    public void setUserlname(String userlname) {
        this.userlname = userlname;
    }

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getUserlocation() {
        return userlocation;
    }

    public void setUserlocation(String userlocation) {
        this.userlocation = userlocation;
    }

    public String getUserinsta() {
        return userinsta;
    }

    public void setUserinsta(String userinsta) {
        this.userinsta = userinsta;
    }
}
