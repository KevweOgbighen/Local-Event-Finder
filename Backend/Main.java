import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        UserService userService = new UserService();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            String command = scanner.nextLine();
            String[] input = command.split(" ");

            if (input[0].equals("signup")) {
                boolean result = userService.signUp(input[1], input[2], input[3], input[4], input[5], input[6]);
                System.out.println(result ? "Signup Successful" : "Signup Failed");
            } else if (input[0].equals("login")) {
                boolean result = userService.login(input[1], input[2]);
                System.out.println(result ? "Login Successful" : "Invalid Credentials");
            } else if (input[0].equals("logout")) { 
                userService.logout();
                System.out.println("Logout Successful");
            } else if (input[0].equals("exit")) {
                break;
            }
        }
    }
}
