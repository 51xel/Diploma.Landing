export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-800 to-orange-400 rounded-full blur-[200px] animate-[spin_15s_linear_infinite]"></div>
      
      <header className="text-center py-16 relative z-10">
        <h1 className="text-5xl font-bold">Інформаційна система алгоритмічного трейдингу з використанням штучного інтелекту</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Спроєктувати та розробити інформаційну систему, здатну автоматично виконувати трейдингові операції на різних торгових біржах із використанням алгоритмічних стратегій та штучного інтелекту. Дослідження має на меті вивчення методів оптимізації торгових алгоритмів для підвищення точності й надійності прогнозів, а також розробку зручної адміністративної панелі для моніторингу, налаштування параметрів алгоритмів і аналізу результатів торгівлі
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto px-6 relative z-10">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Ключові слова</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Алгоритмічний трейдинг</li>
            <li>Штучний інтелект</li>
            <li>Машинне навчання</li>
            <li>Прогнозування цін</li>
            <li>Автоматизовані торгові системи</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Мета дослідження</h2>
          <p className="text-gray-300 mt-2">Дослідити можливість використання штучного інтелекту у трейдингу, а також можливість покращення алгоритмів з його використанням</p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Основні завдання</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Тренування моделей</li>
            <li>Проєетквання системи</li>
            <li>Розробка системи</li>
            <li>Тестування</li>
            <li>Висновки. Оформлення роботи</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Очікувані результати</h2>
          <p className="text-gray-300 mt-2">Готова система, яка буде здатна самостійно здійснювати торгові дії, передбачати, планувати. Декілька навчиних моделей, для використання в алгоритмах</p>
        </section>
      </main>
      
      <footer className="text-center py-8 border-t border-gray-700 mt-12 relative z-10">
        <h2 className="text-2xl font-semibold">Контактна інформація</h2>
        <p className="text-gray-400 mt-2">Email: idonthaveemail@gmail.com</p>
        <p className="text-gray-400">Телефон: +380 123 456 789</p>
      </footer>
    </div>
  );
}
