# coroutines

Для реализации асинхронной логики и выделения работы на отдельные потоки на наших проектах
используется [kotlinx.coroutines](https://github.com/Kotlin/kotlinx.coroutines) версии native-mt.

## Материалы

### Beginner

- 📄 [KotlinLang Docs - Coroutines guide](https://kotlinlang.org/docs/coroutines-basics.html)
  - кратко про `launch`, `delay`, `runBlocking`, `job`, `join`, `coroutineScope`
  - Отличие runBlocking от CoroutineScope (runBlocking блокирует главный поток, а CoroutineContext это suspend функция)
  - Structured Concurrency - корутины не потеряются и не будет утечек, не потеряются ошибки в корутинах 

- 📄 [kotlinlang docs - Coroutines guide](https://kotlinlang.org/docs/coroutines-guide.html)
  - [Cancellation and timeout](https://kotlinlang.org/docs/cancellation-and-timeouts.html#making-computation-code-cancellable) - в корутине нужно проверять, хотят ли её отменить
  - [withContext(NonCancellable)](https://kotlinlang.org/docs/cancellation-and-timeouts.html#run-non-cancellable-block) - корутина не будет реагировать на отмену
  - [Timeout](https://kotlinlang.org/docs/cancellation-and-timeouts.html#timeout) - примеры withTimeout, withTimeoutOrNull
  - [Asynchronous timeout and resources](https://kotlinlang.org/docs/cancellation-and-timeouts.html#asynchronous-timeout-and-resources) - работа с ресурсами внутри withTimeout блока, пример проблемы и решения
  - [Sequential by default](https://kotlinlang.org/docs/composing-suspending-functions.html#sequential-by-default) - по дефолту корутины выполняются последовательно, пример
  - [Concurrent using async](https://kotlinlang.org/docs/composing-suspending-functions.html#concurrent-using-async) - асинхронный запуск, пример
  - [Lazy started async](https://kotlinlang.org/docs/composing-suspending-functions.html#lazily-started-async) - как отложить запуск корутины? Отличия при запуске отложенной корутины используя .start() или .await()
  - [Async-style functions](https://kotlinlang.org/docs/composing-suspending-functions.html#async-style-functions) - в каком стиле лучше объявлять async-функции
  - [Structured concurrency with async](https://kotlinlang.org/docs/composing-suspending-functions.html#structured-concurrency-with-async) - пример возникновения ошибок в coroutineScope, останавливает все дочерние корутины
  - [Dispatchers and threads﻿](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#dispatchers-and-threads) - Dispatcher определяет, какой поток или потоки использует корутина для выполнения, также может ограничить выполнение корутины одним потоком, отправить корутину в пулл потоков или никак ее не ограничивать (None, Dispatchers.Unconfined, Dispatchers.Default, newSingleThreadContext)
  - [Unconfined vs confined dispatcher](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#unconfined-vs-confined-dispatcher) описание Dispatchers.Unconfined и пример работы
  - [Debugging with IDEA](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#debugging-with-idea) как отлаживать программу, используя дебаггер в IDEA, можно смотреть состояние каждой корутины, значения как локальных, так и захваченных переменных для работающих и приостановленных корутин, полный стек создания корутин и стек вызова внутри корутины
  - [Debugging using logging](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#debugging-using-logging) отладка при помощи логирования
  - [Jumping between threads](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#jumping-between-threads) работа в разных потоках, пример, использования use для освобождения создонного потока, когда он больше не нужен
  - [Job in the context](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#job-in-the-context) coroutineContext[Job] - получить Job корутины
  - [Children of a coroutine](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#children-of-a-coroutine) корутина, запущенная другой, наследует весь контекст той, внутри которой она запустилась и становится для нее дочерней, если остановить родителя, остановятся все дочерние корутины. Способы переопределения дефолтного поведения наследования: явно указать DifferentScope.launch, передать другой объект Job в качестве контекста корутины. В обоих случаях корутина не привяжется к области, из которой она была запущенна. Пример с разбором
  - [Parental responsibilities](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#parental-responsibilities) родительская корутина всегда дожидается завершения дочерних корутин, для этого не нужно явно отслеживать всех потомков или делать Job.join, пример
  - [Naming coroutines for debugging](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#naming-coroutines-for-debugging) CoroutineName можно задать для отладки
  - [Combining context elements](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#combining-context-elements) при запуске можно указать несоклько элементов контекста используя оператор + (не ассоциативный, то что справа заменит то, что слева)
  - [Coroutine scope](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#coroutine-scope) область действия корутины, пример
  - [Thread-local data](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#thread-local-data) как передавать локальные данные потока в корутины или между ними. пример использования  asContextElement и asContextElement. Пример и разбор

- 🎦 [Александр Нозик. Кое-что о корутинах](https://www.youtube.com/watch?v=t0AERgx0lrY)
 - Первые 25 минут объясняют что такое корутины, но вообще не понятно, про параллельные миры какие-то, связи между ними вообще ничего не понятно
 - 0:22:55 хорошее объяснение, как ведут себя корутины при передаче Deferred
 - 0:30 проблема с тредами, почему они занимают много памяти 
 - 0:55 пример проблемы в корутинах, которую решает Structured Cuncurrency 
 - 0:57 Structured Cuncurrency 
 - Job позволяет работать с результатом корутины, вырубать корутину и еще всякое, но это не сама корутина
 - 1:06 про GlobalScope, это пустышка, нет контекста, нет родителей, не знает о других запусках из GlobalScope, поэтому нарушается Structured Cuncurrency, некуда прокинуть результат и прочее
 - Поведение при возникновении ошибки: если в корутине возникла ошибка, то она закрывает себя, сообщает родителю что случилось, закрывает всех потомков 
 - Если корутина была закрыта с помощью cancel, то закрывает только детей, родителей не трогает
 - Нельзя закрывать корутину где угодно, нужно делать в точках расщепления, где проверяется, что она не закрыта
 
  - Наглядное пояснение что такое асинхронное выполнение и чем отличается от параллельного
  - Основные термины в области корутин
  - Какие основные ошибки совершают новички
  - Какие хитрости можно делать, используя корутины
- 🎦 [Александр Нозик. Кое-что о корутинах. Flow, Scope](https://www.youtube.com/watch?v=AAFi_C40BOM)
  - очень хорошее видео, целиком можно смотреть
  
  - `CoroutinesContexta`, отличия от map - строгое типизирование ( если использовать ключ <Е>, то получите объект типа Е ), сумма двух CoroutineContext не ассоциотивна ( CoroutineContext1 + CoroutineContext2 != CoroutineContext2 + CoroutineContext1 т.к если в CoroutineContext1 есть ключи из CoroutineContext2, то при сумме значения по этим ключам перезапишутся из CoroutineContext2 )
  - Используя `EmptyCoroutinesContext` вы никак не пользуетесь преимуществами StructuredConcurrency
  - Для использования StructuredConcurrency необходим объкет `Job`, который будет помнить детей и родителя этой корутины
  - GlobalScope - пустышка, хранит и использует `EmptyCoroutinesContext`
  - Разбор `launch`, `newCoroutinesContext` 
  - Способ завершить все корутины - отменить корневой Scope
  - Нельзя держать какой-нибудь Scope и периодический давать ему задачи
  - `supervisorScope` - когда внутри проихсодит ошибка, он не обрушивает Scope-родительского
  - `async` похож на `Job`, отличие в том, что он возвращает `Deferred<T>`, await() - позволяет использовать результат, когда он будет получен.
  - Вместо `async` можно использовать `suspend` функцию, единственное отличие в том, что `async` можно отменить, в отличие от `suspend` функции
  - while(isActive){...} - проверяет, отменена ли данная корутина, и если она отменена, то не входит в новую итерацию цикла. Если использовать while(true){...}, то тот же самый эффект будет в ближайшем suspension point
  - Channel (1:00:00) - канал, подходит если нужно обмениваться результатами работы, один пишет, другой читает, виды каналов (очень хорошее пояснение)
  - Flow - аналог channel. Бывают холодные и горячие.Channel
    - Холодные - следующий элемент вычисляется не тогда, когда он готов, а когда кто-нибудь его запросил из flow.
    - Горячий - возвращает элемент сразу же, как сгенерит
  
- 📄 [Hands-on: Intro to coroutines and channels](https://play.kotlinlang.org/hands-on/Introduction%20to%20Coroutines%20and%20Channels?_gl=1*1j033dc*_ga*Nzc2NDAwNzc2LjE2MjAyODkwMTg.*_ga_J6T75801PF*MTYzMTg1MjIzOC4xMzcuMS4xNjMxODUyMjY2LjMy&_ga=2.168555557.561329090.1631509904-776400776.1620289018)
  - [Как работает Channel](https://play.kotlinlang.org/hands-on/Introduction%20to%20Coroutines%20and%20Channels/08_Channels)

- 🎦 [RedMadRobot - Coroutines. Хаотичное изучение. Часть 1](https://www.youtube.com/watch?v=cHERit7LNGM)
  - [Dispatcher](https://youtu.be/cHERit7LNGM?t=242) - виды Dispatcher
  - [withContext](https://youtu.be/cHERit7LNGM?t=318) - что это и пример с NonCancellableContext
  - [viewModelScope](https://youtu.be/cHERit7LNGM?t=490) - готовый Scope, привязанный к жизни компонента
  - [Берегите main-thread](https://youtu.be/cHERit7LNGM?t=575) - вызовы suspend функций должны быть безопасны для main-thread

- 🎦 [RedMadRobot - Coroutines. Хаотичное изучение. Часть 2](https://www.youtube.com/watch?v=6Apj_v9ZkBs) - разбор базовых понятий
  - [CoroutineContext](https://youtu.be/6Apj_v9ZkBs?t=921) - что это, что в нем может находиться (Job, CoroutineDispatcher, CoroutineName, CoroutineExceptionHandler)
  - [CoroutinesScope](https://youtu.be/6Apj_v9ZkBs?t=185) - создает новый Scope, копирует все из Scope-родителя и исполняет переданный ему блок
  - [CoroutineScope vs CoroutinesContext](https://youtu.be/6Apj_v9ZkBs?t=185) - разница между CoroutineScope и CoroutineContext
  - [supervisorScope](https://youtu.be/6Apj_v9ZkBs?t=238) - Scope не упадет, если упадет ребенок. Если упадет сам Scope, то не упадет Scope-родитель
  - [Job](https://youtu.be/6Apj_v9ZkBs?t=311) - фоновая работа, имеет ЖЦ(active, cancelled). Job предоставляет управление корутиной, можем вызвать Job.cancel и тд, не имеет результата
  - [Deferred](https://youtu.be/6Apj_v9ZkBs?t=426) - Job, но с результатом, создается myScope.async{...}. Получить значение - myDeferred.await() - вернет занечение или исплючение при ошибке 
  - [Как запустить работу во внешнем Scope](https://youtu.be/6Apj_v9ZkBs?t=535) - что делать, если нам не подходит ViewModelScope, потому что работа должна жить дольше чем ViewModel
  - [Почему Job нужно делать cancellable](https://youtu.be/6Apj_v9ZkBs?t=1172) - когда Job отменили, корутина не отменится автоматичеки, разбор кейса
 
- 🎦 [RedMadRobot - Coroutines. Хаотичное изучение. Часть 3](https://www.youtube.com/watch?v=7JSHSqAhErw)
  - [Channel](https://youtu.be/7JSHSqAhErw?t=470) - канал для обмена, можно положить и получить, не блокирующий (оперции саспендятся), можно закрыть, разные capacity(RENDEZVOUS, UNLIMITED, CONFLATED, BUFFERED) 
  - [SingleLiveEvent - что это и звчем](https://youtu.be/7JSHSqAhErw?t=218) - события нужно обрабатывать один раз
  - [SingleLiveEvent используя Channel](https://youtu.be/7JSHSqAhErw?t=690) 
  - [Flow.buffer](https://youtu.be/7JSHSqAhErw?t=952) - добавить к flow буффер на случай медленного получения
  - [conflate](https://youtu.be/7JSHSqAhErw?t=1045) - сокращение для buffer с параметрами CONFLATED и DROP_OLDEST, т.е хранит одно значение и перезаписыват его
  - [flowOn](https://youtu.be/7JSHSqAhErw?t=1087) - переключает контекст выполнения операторов идущих до него, если операторы без своего контекста //я плохо понял зачем это
  - [shareIn](https://youtu.be/7JSHSqAhErw?t=1207) - превращает холодный Flow в горячий SharedFlow
  - [WhileSubscribed](https://youtu.be/7JSHSqAhErw?t=1312) - для запуска корутины, запускает при первом подписчике, остонавливает когда пропадет последний подписчик, можно сохранить кэш при выключении или стереть после timeout
  - [Как не тратить ресурсы](https://youtu.be/7JSHSqAhErw?t=1392) - чтобы не дергать руками Job.cancel() можно Lifecycle.repeatOnLifecycle
  - [Lifecycle.repeatOnLifecycle](https://youtu.be/7JSHSqAhErw?t=1419) - запускает корутину, когда ЖЦ подходит до определенного состояния, когда ЖЦ ниже нужного состояния - отменяет корутину и усылпяет(suspend), когда снова в нужном состоянии - запускает повторно
  - [Особенности repeatOnLifecycle](https://youtu.be/7JSHSqAhErw?t=1482) - рекомендуется создавать либо в Activity.onCreate() или Fragment.onViewCreated()
  - [Поведение при DESTROYED](https://youtu.be/7JSHSqAhErw?t=1522) - держет в suspend внешнюю корутину, пока не DESTROYED, когда DESTROYED - отпустит
  - [Flow.flowWithLifecycle](https://youtu.be/7JSHSqAhErw?t=1580) - обертка над repeatOnLifecycle, упрощает написание если только 1 продюсер 

### Intermediate

- 🎦 [KotlinConf 2019: Asynchronous Data Streams with Kotlin Flow by Roman Elizarov](https://www.youtube.com/watch?v=tYcqn48SMT8)
- 📄 [Guide to UI programming with coroutines](https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/coroutines-guide-ui.md)
- 📄 [Корутины в Kotlin (гайд)](https://habr.com/ru/company/alfa/blog/336228/)
- 📄 [Best practices for coroutines](https://developer.android.com/kotlin/coroutines/coroutines-best-practices)
- 📄 [Ограничения native-mt версии для iOS таргета](https://github.com/Kotlin/kotlinx.coroutines/blob/native-mt/kotlin-native-sharing.md).
- 📄 [Roman Elizarov - Structured Concurrency](https://elizarov.medium.com/structured-concurrency-722d765aa952)
- 📄 [Structured Concurrency in action! (using Kotlin coroutines)](https://proandroiddev.com/structured-concurrency-in-action-97c749a8f755?gi=85a83dfe8ceb)
- 🎦 [Roman Elizarov — Structured concurrency](https://www.youtube.com/watch?v=Mj5P47F6nJg)

### Advanced

- 🎦 [Андрей Бреслав — Асинхронно, но понятно. Сопрограммы в Kotlin](https://www.youtube.com/watch?v=ffIVVWHpups)
  - Немного устаревшее, но про внутрянку наглядно показано.
- 🎦 [Корутины в Kotlin — Роман Елизаров, JetBrains](https://www.youtube.com/watch?v=b4mBmi1QNF0)
- 📄 [Coroutines Codegen](https://github.com/JetBrains/kotlin/blob/document-coroutines-codegen/compiler/backend/src/org/jetbrains/kotlin/codegen/coroutines/coroutines-codegen.md#state-machine)
  - Документ подробно описывающий что делает компилятор с suspend кодом и что генерируется в результате

## Highlights

### Внутреннее устройство

> Мы не стремимся здесь дать полное объяснение того, как сопрограммы работают под капотом, но примерный смысл того, что происходит, очень важен.
> 
> Сопрограммы полностью реализованы с помощью технологии компиляции (поддержка от языковой виртуальной машины, среды исполнения, или операционной системы не требуется), а приостановка работает через преобразование кода. В принципе, каждая функция приостановки (оптимизации могут применяться, но мы не будем вдаваться в эти подробности здесь) преобразуется в конечный автомат, где состояния соответствуют приостановленным вызовам. Прямо перед приостановкой следующее состояние загружается в поле сгенерированного компилятором класса вместе с сопутствующими локальным переменными и т. д. При возобновлении сопрограммы локальные переменные и состояние восстанавливаются, и конечный автомат продолжает свою работу.
> 
> Приостановленную сопрограмму можно сохранять и передавать как объект, который хранит её приостановленное состояние и локальные переменные. Типом таких объектов является Continuation, а преобразование кода, описанное здесь, соответствует классическому Continuation-passing style. Следовательно, приостановливаемые функции принимают дополнительный параметр типа Continuation (сохранённое состояние) под капотом.
> 
> Более детально о том, как работают сопрограммы, можно узнать в этом проектном документе. Похожие описания async / await в других языках (таких как C# или ECMAScript 2016) актуальны и здесь, хотя особенности их языковых реализаций могут существенно отличаться от сопрограмм Kotlin.

[Source](https://kotlinlang.ru/docs/reference/coroutines.html).

Пример преобразования кода на этапе компиляции:

Исходник:
```kotlin
dummy() // suspend
println(1)
dummy() // suspend
println(2)
```

При компиляции преобразуется в:
```kotlin
val $result: Any? = null
when (this.label) {
    0 -> {
        this.label = 1
        $result = dummy(this)
        if ($result == COROUTINE_SUSPENDED) return COROUTINE_SUSPENDED
        goto 1
    }
    1 -> {
        println(1)
        this.label = 2
        $result = dummy(this)
        if ($result == COROUTINE_SUSPENDED) return COROUTINE_SUSPENDED
        goto 2
    }
    2 -> {
        println(2)
        return Unit
    }
    else -> {
        throw IllegalStateException("call to 'resume' before 'invoke' with coroutine")
    }
}
```

Более подробно можно прочитать в [документе](https://github.com/JetBrains/kotlin/blob/document-coroutines-codegen/compiler/backend/src/org/jetbrains/kotlin/codegen/coroutines/coroutines-codegen.md#state-machine)

Также можно прочитать [статью или посмотреть видео](https://manuelvivo.dev/suspend-modifier).

### CoroutineScope

[CoroutineScope](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/index.html) 
задает область действия корутины. Именно используя скоуп производится остановка всех отложенных
операций привязанных к некоторому жизненному циклу.

Например, у каждой `ViewModel` есть `viewModelScope` - это `CoroutineScope`, который создается при
создании `ViewModel` и отменяется при вызове `onCleared`. 

Рассмотрим небольшую тестовую `ViewModel`:
```kotlin
class TestViewModel: ViewModel() {
  init {
    viewModelScope.launch {
      delay(10000)
      println("work done!")
    }
  }
}
```

Если мы зайдем на экран, использующий эту `ViewModel`, и сразу уйдем (не дожидаясь 10 секунд), то
сообщение не будет выведено в лог. А если подождем 10 секунд - будет. Это как раз потому что при
вызове `onCleared` отменяется `CoroutineScope`, а вместе с ним и все его корутины. А вызов `onCleared`
происходит при окончательном уходе с экрана (прямо перед удалением `ViewModel`).

Также важно понимать что скоуп может быть вложенным (любой уровень вложенности поддерживается). 
Для создания вложенного скоупа используется билдер `coroutineScope`. При отмене родительского скоупа
отменяются и все вложенные.

Вложенный скоуп может пригодиться в случаях, когда вам не доступен класс текущего `CoroutineScope`,
но нужно вызвать один из билдеров (`launch`/`async`).

```kotlin
suspend fun doSomeParallelWork() {
    coroutineScope {
        val task1 = async { callFirstRequest() }
        val task2 = async { callSecondRequest() }
        awaitAll(task1, task2)
    }
}
```

Все корутины принадлежат какому либо скоупу. Скоуп либо создается вручную
(вызовом `CoroutineScope`), либо используется `GlobalScope`, который не имеет ограничения жизненного
цикла - живет все время жизни процесса приложения, поэтому не рекомендуется к использованию без
твердой уверенности что это верно.   

### CoroutineContext

TODO

### Dispatcher

TODO

### Механика delay

По началу `delay` все интерпретируют как `Thread.sleep` и считают что текущий поток будет остановлен
на N миллисекунд.
Но [это не так](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html)
. Рассмотрим следующий блок кода:

```kotlin
suspend fun startTimer() {
    println("show message at start")
    delay(1000)
    println("show message after second")
}
```

При компиляции данный код будет преобразован (если сильно упростить) в нечто похожее на:

```kotlin
fun startTimer() {
    println("show message at start")
    delayCallback(1000) {
        println("show message after second")
    }
}
```

То есть вместо вызова `sleep` на весь поток, вся работа после suspend-point (`delay` это suspend
функция), будет "завернута в callback", закинута в очередь текущего потока (через Dispatcher
корутин) и данный калбек будет выполнен через секунду (когда будет получен из очереди диспатчером).

Вывод - вызов `delay` не останавливает работу потока.

## Check Yourself

TODO
