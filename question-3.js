/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
O(n) เพราะเป็นการวนลูปผ่านอาเรย์ students เพื่อหาค่าที่ตรงกันกับ id ที่ต้องการ โดยจะทำการเช็คไปที่ละ index ของอาเรย์ students ทีละตัว จนกว่าจะเจอ id ที่ตรงกันหรือวนครบทุกตัว

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(log n) เพราะหใช้ binary search ในการหา product price โดยทำการแบ่งครึ่งอาเรย์ออกเป็น 2 ส่วน แล้วเปรียบเทียบกับค่ากลางในแต่ละรอบการหา ทำให้ลดเวลาในการหาได้ครึ่งนหนึ่งในแต่ละรอบ
*/

/* 
Which function is more efficient and why?
Answer:
ขึ้นอยู่กับความต้องการว่าเราจะใช้ในการหาข้อมูลแบบไหน ถ้าขนาดข้อมูลเล็กๆ ก็ไม่จำเป็นต้องใช้ binary search แต่ถ้าขนาดข้อมูลใหญ่ๆ การใช้ binary search จะทำให้การค้นหามีประสิทธิภาพมากกว่า

*/
