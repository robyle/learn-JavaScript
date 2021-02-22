import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

/**
 * HelloWorld
 */
public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("========================Hello World!============================");
        compareTxtFile("C:/Users/Roby/Desktop/cy.txt","C:/Users/Roby/Desktop/lcy.txt");
        System.out.println("-------0---------------程序运行结束--end-----------0-------------");
    }

    public static void compareTxtFile(String filePath1,String filePath2){
        try {
                String encoding="UTF8";
                Set<String> ls1 = new HashSet<String>();
                Set<String> ls2 = new HashSet<String>();

                readFileToSt(filePath1, encoding, ls1);
                readFileToSt(filePath2, encoding, ls2);

                ls1.removeAll(ls2);
                Iterator<String> it = ls1.iterator();
                System.out.println("================差异部分=================");
                while (it.hasNext()) {
                    String str = it.next();
                    System.out.println(str);
                }
        } catch (Exception e) {
            System.out.println("读取文件内容出错");
            e.printStackTrace();
        }
    }

    private static void readFileToSt(String filePath2, String encoding, Set<String> ls2) {
        File file2=new File(filePath2);
        if(file2.isFile() && file2.exists()){ //判断文件是否存在
            try (InputStreamReader read = new InputStreamReader(new FileInputStream(file2),encoding)) {
                //考虑到编码格式
                BufferedReader bufferedReader = new BufferedReader(read);
                String lineTxt = null;
                while((lineTxt = bufferedReader.readLine()) != null){
                    addStrToSet(ls2, lineTxt);
                }
            } catch (Exception e) {
                System.out.println("处理文件异常："+e.getMessage());
            }
        }else{
            System.out.println("找不到指定的文件");
        }
    }

    private static void addStrToSet(Set<String> ls2, String lineTxt) {
        if (lineTxt != null && lineTxt.trim().length() > 0) {
            System.out.println(lineTxt.trim());
            ls2.add(lineTxt.trim());
        }
    }
}