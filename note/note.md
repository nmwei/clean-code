# Chapter1 - 重构入门
## 何为重构
1. 定义  
在不改变软件可观察行为的前提下改善其内部结构，提高其可理解性，降低其修改成本。
2. 重构与设计模式
设计模式为重构提供了目标。
## 为何重构
1. 重构改进软件设计
设计不再是一切动作的前提，而是在整个开发过程中逐渐浮现出来。
2. 重构使软件更容易理解
任何一个傻瓜都能写出计算机可以理解的代码。唯有写出人类容易理解的代码，才是优秀的程序员。
3. 重构帮助你理解代码
擦掉窗户上的污垢，使你看得更远。在重构过程中把代码结构理清，你就可以从中理解更多东西。
4. 重构帮助找到bug
对代码的理解，可以帮助你找到bug。
5. 重构提高编程速度
良好的设计是快速开发的根本，重构可以提高设计质量。
## 何时重构
1. 添加功能时
重构可以使添加新特性更加快捷顺畅。
2. 修补错误时
出现错误说明代码设计还不够清晰，没有清晰到让你一眼看出bug。
3. 复审代码时
代码复审可以让更多人有机会提出有用的建议，重构可以帮助代码复审工作得到更具体的结果。
## 如何重构
1. 好的测试是重构的前提
重构前，先检查自己是否有一套可靠的测试机制。这些测试必须有自我检验能力。
2. 重构的节奏：测试、小修改、测试、小修改…
每次修改的幅度都很小，所以任何错误都很容易发现。
3. 添加新功能与重构过程应该交替进行，而不是同时进行。
## 重构与设计
1. 重构与设计是互补的。
2. 重构可以带来更简单的设计，同时又不损失灵活性，这也降低了设计过程的难度，减轻了设计压力。
## 重构与性能
1. 为了让软件更易于理解，我们常会做一些使程序运行更慢的修改(重构)；为了让软件运行更快，我们往往会做一些使代码较难理解的修改(性能优化)。
2. 虽然重构有时使软件运行更慢，但它也使软件的性能优化更容易。
3. 重构时你不必担心性能，优化时你才需要担心他们。
4. 程序运行时大部分时间一般都耗费在一小半代码上，不必要一视同仁地优化所有代码。
5. 你应该使用一个度量工具来监控程序的运行，让它告诉你程序汇总哪些地方大量消耗时间和空间。
## 重构案例
案例介绍
影片出租应用程序：根据租赁时间和影片类型计算顾客的消费金额和积分并打印详单。影片分为三类：普通片、儿童片和新片。
[(1) 初始代码](https://github.com/nmwei/javascript-refactoring/blob/master/src/%E7%AC%AC%E4%B8%80%E7%AB%A0/1.1%20%E8%B5%B7%E7%82%B9.js)
[(2) 分解并重组statement()](https://github.com/nmwei/javascript-refactoring/blob/master/src/%E7%AC%AC%E4%B8%80%E7%AB%A0/1.3%20%E5%88%86%E8%A7%A3%E5%B9%B6%E9%87%8D%E7%BB%84statement().js)
[(3) 使用多态取代与价格相关的条件逻辑](https://github.com/nmwei/javascript-refactoring/blob/master/src/%E7%AC%AC%E4%B8%80%E7%AB%A0/1.4%20%E8%BF%90%E7%94%A8%E5%A4%9A%E6%80%81%E5%8F%96%E4%BB%A3%E4%B8%8E%E4%BB%B7%E6%A0%BC%E7%9B%B8%E5%85%B3%E7%9A%84%E6%9D%A1%E4%BB%B6%E9%80%BB%E8%BE%91.js)
[(4) 使用模板方法重构](https://github.com/nmwei/javascript-refactoring/blob/master/src/%E7%AC%AC%E4%B8%80%E7%AB%A0/1.5%20%E4%BD%BF%E7%94%A8%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E9%87%8D%E6%9E%84.js)


# Chapter2 - 代码的坏味道
如果尿布臭了，就换掉它。
## 一. Duplicated Code(重复代码)
1. 如果你在一个以上的地点看到相同的程序结构，设法将他们合而为一，程序会变得更好。
2. 同一个类的两个函数含有相同的表达式，采用`Extract Method`(提炼函数)提炼出重复的代码。
3. 两个互为兄弟的子类含有相同的表达式，首先对两个类都使用`Extract Method`(提炼函数)，然后再对提炼出来的代码使用`Pull Up Method`(函数上移)，将它推入超类。
4. 如果代码之间只是类似，并非完全相同，运用`Extract Method`(提炼函数)将相似部分和差异部分分割开，然后可以运用`Form Template Method`(塑造模板函数)获取一个莫模板方法。
5. 如果有些函数以不同算法做相同的事情，你可与选择其中较清晰的一个，使用`Substitute Algorithm`(替换算法)将其他函数的算法替换掉。
6. 如果两个毫不相关的类出现重复代码，应考虑对其中一个使用`Extract Class`(提炼类)，将重复代码提炼到一个独立的类中。
7. 重复代码所在的函数应该只属于某一个类，另一个类调用它；或者应该属于第三个类，另两个类引用这第三个类。决定重复函数的最合适位置，确保只有一份。
## 二. Long Method(过长函数)
1. 拥有短函数的对象会活的比较好、比较长。
2. 绝大部分情况下，要把函数变小，只需要使用`Extract Method`(提炼函数)。
3. 使用`Extract Method`(提炼函数)时，如果函数中有个别参数和临时变量，可以把他们当做参数，传递给被提炼出来的新函数。
4. 如果被提炼函数内有大量的参数和临时变量，可以运用`Replace Temp with Query`(以查询取代临时变量)来消除这些临时元素。
5. 使用`Introduce Parameter Object`(引入参数对象)可以将过长的参数列变得更简洁一些。
6. 如果被提炼函数仍然有太多临时变量和参数，可以使用`Replace Method with Method Object`(以函数对象取代函数)。
7. 注释通常能够指出应该被提炼的代码。就算只有一行代码，如果它需要以注释来说明，那也值得将它提炼到独立函数去。 
8. 你可以使用`Decompose Conditional`(分解条件表达式)处理条件表达式。
9. 你应该将循环和其内的代码提炼到一个独立的函数中。
## 三. Large Class(过大的类)
1. 如果想利用单个类做太多事情，其内往往就会出现太多实例变量。一旦如此，重复代码也就接踵而至了。
2. 可以运用`Extract Class`(提炼类)将几个彼此相关的实例变量一起提炼至新类内。如果被提炼出的类适合作为一个子类，使用`Extract Subclass`(提炼子类)往往比较简单。
3. 有时候类并非所有时刻都使用所有实例变量。你可以多次使用`Extract Class`(提炼类)或`Extract Subclass`(提炼子类)。
4. 和“太多实例变量”一样，类内如果有太多代码，也是代码重复、混乱并最终走向死亡的源头。
5. 如果有五个“百行函数”，他们之中有很多代码相同，那么你也许可以把他们变成五个“十行函数”和十个提炼出的“双行函数”。
6. 和“太多实例变量”一样，类内如果有太多代码，往往也适合使用`Extract Class`(提炼类)或`Extract Subclass`(提炼子类)。
7. 如果你的过大的类是一个`GUI`类，你可能需要把数据和行为移到一个独立的类中。
## 四. Long Parameter List(过长参数列)
1. 太长的参数列难以理解，太多参数会造成前后不一致、不易使用。
2. 刚开始学习编程时，老师教我们：把函数所需的所有东西都以参数传递进去。这可以理解，因为除此之外只能选择全局数据，而全局数据是邪恶的东西。
3. 对象技术改变了这一情况：如果你手上没有所需的东西，总可以叫另一个对象给你。有了对象，函数需要的东西多半可以在函数的宿主类中找到。面向对象程序中的函数，其参数列通常比在传统程序中短的多。
4. 如果向已有的对象发出一条请求就可以取代一个参数，那么你应该激活重构手法`Replace Parameter with Method`(以函数取代参数)。
5. 你还可以运用`Preserve Whole Object`(保持对象完整)将来自同一对象的一堆数据收集起来，并以该对象替换他们。
6. 如果某些数据缺乏合理的对象归属，可使用`Introduce Parameter Object`(引入参数对象)为他们制造出一个“参数对象”。
7. 这里有一个例外：有时候你明显不希望造成“被调用对象”与“较大对象”间的某种依赖关系。这时候将数据从对象拆解出来单独作为参数，也很合情合理。但是请权衡其所引发的代价。
## 五. Divergent Change(发散式变化)
1. 我们希望软件能够更容易被修改。一旦需要修改，我们希望能够**跳到系统的某一点，只在该处做修改**。
2. 如果某个类经常因为不同的原因在不同的方向上发生变化， `Divergent Change`(发散式变化)就出现了。
3. 针对某一外界变化的所有相应修改，都只应该发生在单一类中。为此，你应该找出某特定原因而造成的所有变化，运用`Extract Class`(提炼类)将他们提炼到另一个类中。
## 六. Shotgun Surgery(散弹式修改)
1. `Shotgun Surgery`(散弹式修改)类似`Divergent Change`(发散式变化)，但恰恰相反。
2. 如果每遇到某种变化，你都必须在许多不同的类内做出许多小修改，你所面临的坏味道就是`Shotgun Surgery`(散弹式修改)。
3. 如果需要修改的代码散布四处，你不但很难找到他们，也很容易忘记某个重要的修改。
4. 你应该使用`Move Method`(搬移函数)和`Move Field`(搬移字段)把所有需要修改的代码放进同一个类。
5. 如果眼下没有合适的类可以安置这些代码，就创造一个。通常可以运用`Inline Class`(将类内联化)把一系列相关行为放进同一个类。
6. `Divergent Change`(发散式变化) 是指“一个类受多种变化的影响”。`Shotgun Surgery`(散弹式修改)则是指“一种变化引起多个类响应修改”。这两种情况你都希望整理代码，使“外界变化”与“需要修改的类”趋于一一对应。
## 七. Feature Envy(依恋情节)
1. 对象技术即是一种“将数据和对数据的操作行为包装在一起”的技术。
2.  `Feature Envy`(依恋情节)指的是：函数对某个类的兴趣高过对自己所处类的兴趣。
3. 我们常常看到某个函数为了计算某个值，从另一个对象那儿调用了几乎半打的取值函数。此时，你应该使用`Move Method`(搬移函数)把它移到它该去的地方。
4. 先使用`Extract Method`(提炼函数)，将这个函数分解为数个较小函数并分别置于不同地点，有助于`Move Method`(搬移函数)重构手法的实施。
5. 如果一个函数用到几个类的功能，那么需要判断哪个类拥有最多被此函数使用的数据，然后就把这个函数和那些数据摆在一起。
## 八. Data Clumps(数据泥团)
1. 数据项就像小孩子，喜欢成群结队地待在一块儿。这些总是绑在一起出现的数据真应该拥有属于它们自己的对象。
2. 首先运用`Extract Class`(提炼类)将他们提炼到一个独立对象中，然后将注意力转移到函数签名上，运用`Introduce Parameter Object`(引入参数对象)或`Preserve Whole Object`(保持对象完整性)为它减肥。这样做可以缩短参数列，简化函数调用。
3. 如果删掉众多数据中的一项，其他数据不再有意义，那么他们应该以一个对象的形式存在。
4. 一旦拥有新对象，你就有机会让程序散发出一种芬芳。可以将适当的程序行为移至新类。不必太久，所有的类都将在他们的小小社会中发挥价值。
## 九. Primitive Obsession(基类类型偏执)
1. 大多数编程环境都有两种数据：结构类型允许你将数据组织成有意义的形式；基本类型则是构成结构类型的积木块。
2. 对象技术的新手通常不愿意在小任务上运用小对象——像是结合数值和币种`money`类、由一个起始值和一个结束值组成的`range`类、电话号码或邮政编码等的特殊字符串。
3. 你可以运用`Replace Data Value with Object`(以对象取代数据值)将原本单独存在的数据值替换为对象，从而走出洞窟，进入炙手可热的对象世界。
4. 如果想要替换的数据值是类型码，而它并不影响行为，则可以运用`Replace Type Code with Class`(以类取代类型码)将它换掉。
5. 如果你有与类型码相关的条件表达式，可运用`Replace Type Code with Subclass`(以子类取代类型码)或`Replace Type Code with State/Strategy`(以`State/Strategy`取代类型码)加以处理。
6. 如果你有一组应该总是被放在一起的字段，可运用`Extract Class`(提炼类)。
7. 如果你在参数列中看到基本类型数据，不妨试试`Introduce Parameter Object`(引入参数对象)。
8. 如果你发现自己正从数组中挑选数据(数组中的元素各自代表不同的东西)，可运用`Replace Array with Object`(以对象取代数组)。
## 十. Switch Statements(Switch惊悚现身) 
1. 面向对象程序的一个最明显特征就是：少用`switch`语句。从本质上说，`switch`语句的问题在于重复。面向对象中的多态概念可为此带来优雅的解决办法。
2. 使用`Extract Method`(提炼函数)将`switch`语句提炼到一个独立函数中，再以`Move Method`(搬移函数)将它搬移到需要多态性的那个类里。
3. 你必须决定是否使用`Replace Type Code with Subclass`(以子类取代类型码)或`Replace Type Code with State/Strategy`(以`State/Strategy`取代类型码)。一旦这样完成继结构之后，你就可以运用`Replace Conditional with Polymorphism`(以多态取代条件表达式)了。
4. 如果你只是在单一函数中使用`switch`语句，多态就有点杀鸡用牛刀了。这种情况下`Replace Parameter with Explicit Methods`(以明确函数取代参数)是个不错的选择。如果你的选择条件之一是`null`，可以试试`Introduce Null Object`(引入`null`对象)。
## 十一. Parallel Inheritance Hierarchies(平行继承体系)
1. `Parallel Inheritance Hierarchies`(平行继承体系)其实是`Shotgun Surgery`(散弹式修改)的特殊情况。在这种情况下，每当你为某个类添加一个子类，必须也为另一个类相应增加一个子类。
2. 让一个继承体系的实例引用另一个继承体系的实例。如果再接再厉运用`Move Method`(搬移函数)和`Move Field`(搬移字段)，就可以将引用端的继承体系消弭于无形。
## 十二. Lazy Class(冗赘类)
1. 你创建的每一个类，都得有人去维护它。如果一个类的所得不值其身价，就应该消失。
2. 如果某些子类没有做足够的工作，试试`Collapse Hierarchy`(折叠继承体系)。
3. 对于几乎没用的组件，你应该以`Inline Class`(将类内联化)对付他们。
## 十三. Speculative Generality(夸夸其谈未来性)
1. 当有人说“噢，我想我们总有一天需要做这事”，并企图以各式各样的钩子和特殊情况来处理一些非必要的事情，这种坏味道就出现了。
2. 如果所有装置都会被用到，那就值得那么做；如果用不到，就不值得。用不上的装置只会挡你的路，所以，把它搬开吧。
3. 如果你的某个抽象类其实没有太大作用，请运用`Collapse Hierarchy`(折叠继承体系)。
4. 不必要的委托可运用`Inline Class`(将类内联化)除掉。
5. 如果函数的某些参数未被用上，可对它实施`Remove Parameter`(移除参数)。
6. 如果函数名称带有多余的抽象意味，应该对它实施`Rename Method`(函数改名)，让它更现实一些。
## 十四. Temporary Field(令人迷惑的暂时字段)
1. 有时你会看到这样的对象：其内某个实例变量仅为某种特定情况而设。这样的代码让人不宜理解，因为你通常认为对象在所有时候都需要它的所有变量。
2. 请使用`Extract Class`(提炼类)给这个可怜的孤儿创造一个家，然后把所有和这个变量相关的代码都放进这个新家。
3. 或许你还可以使用`Introduce Null Object`(引入`Null`对象)在变量不合法的情况下创建一个`Null`对象，从而避免写出条件式代码。
4. 如果类中有一个复杂算法，需要好几个变量，实现者不希望传递一长串参数，所以他把这些参数放进字段中，导致坏味道。这些字段只在使用该算法时才有效，你可以利用`Extract Class`(提炼类)把这些变量和其相关函数提炼到一个独立类中。提炼后的新对象将是一个函数对象。
## 十五. Message Chains(过度耦合的消息链)
1. 如果你看到用户向一个对象请求另一个对象，然后再向后者请求另一个对象，然后再请求另一个对象……这就是消息链。
2. 你应该使用`Hide Delegate`(隐藏“委托关系”)。
3. 先观察消息链最终得到的对象时用来干什么的，看看能否以`Extract Method`(提炼函数)把使用该对象的代码提炼到一个独立函数中，再运用`Move Method`(搬移函数)把这个函数推入消息链。
## 十六. Middle Man(中间人)
1. 对象的基本特征之一就是封装——对外部世界隐藏其内部细节。封装往往伴随委托。
2. 人们可能过度运用委托。你也许会看到某个类接口有一半的函数都委托给其他类，这样就是过度运用。
3. 这时应该使用`Remove Middle Man`(移除中间人)，直接和真正负责的对象打交道。
4. 如果这样“不干实事”的函数只有少数几个，可以运用`Inline Method`(内联函数)把他们放进调用端。
5. 如果这些中间人还要其他行为，可以运用`Replace Delegation with Inheritance`(以继承取代委托)把它变成实责对象的子类，这样你既可以扩展原对象的行为，又不必负担那么多的委托动作。
## 十七. Inappropriate Intimacy(狎昵关系)
1. 有时你会看到两个类过于亲密，花费太多时间去探究彼此的私有成分。如果这发生在两个“人”之间，我们不必做卫道士；但对于类，我们希望他们严守清规。
2. 可以采取`Move Method`(搬移函数)和`Move Field`(搬移字段)帮他们划清界限，从而减少狎昵关系。
3. 你也可以看看是否可以运用`Change Bidirectional Association to Unidirectional`(将双向关联改为单向关联)，让其中一个类对另一个斩断情丝。
4. 如果两个类实在是情投意合，可以运用`Extract Class`(提炼类)把两者共同点提炼到一个安全地点，让他们坦荡地使用这个新类。或者也可以尝试运用`Hide Delegate`(隐藏“委托关系”)让另一个类来为他们传递相思情。
5. 继承往往造成过度亲密，因为子类对超类的了解总是超过后者的主观愿望。如果你觉得是该让这个孩子独自生活了，请运用`Replace Inheritance with Delegation`(以委托取代继承)让它离开继承体系。
## 十八. Alternative Classes with Different Interfaces(异曲同工的类)
1. 如果两个函数做同一件事，却有着不同的签名，请运用`Rename Method`(函数改名)根据他们的用途重新命名。
2. 反复运用`Move Method`(搬移函数)将某些行为移入类，直到两者的协议一致为止。如果你必须重复而赘余地移入代码才能完成这些，或许可运用`Extract Superclass`(提炼超类)为自己赎点罪。
## 十九. Incomplete Library Class(不完美的库类)
1. 复用常被视为对象的终极目的。许多编程技术都建立在程序库的基础上。
2. 库类构筑者没有未卜先知的能力，我们不能因此责怪他们。库往往构造的不够好，而且往往不可能让我们修改其中的类使它完成我们希望完成的工作。
3. 如果你只想修改库类的一两个函数，可以运用`Introduce Foreign Method`(引入外加函数)；如果想要添加一大堆额外行为，就得运用`Introduce Local Extension`(引入本地扩展)。
## 二十. Data Class(幼稚的数据类)
1. 幼稚的数据类是指：他们拥有一些字段，以及用于访问(读写)这些字段的函数，除此之外一无长物。
2. 这样的类只是一种不会说话的数据容器，他们几乎一定被其他类过分细锁地操纵着。
3. 你应该运用`Encapsulate Collection`(封装集合)把他们封装起来。对于那些不该被其他类修改的字段，请运用`Remove Setting Method`(移除设值函数)。
4. 找出这些取值/设值函数被其他类运用的地点。尝试`Move Method`(搬移函数)把那些调用行为搬移到`Data Class`(幼稚的数据类)来。如果无法搬移整个函数，就运用`Extract Method`(提炼函数)产生一个可被搬移的函数。不久以后你就可以运用`Hide Method`(隐藏函数)把这些取值/设置函数隐藏起来了。
5. `Data Class`(幼稚的数据类)就像小孩子。作为一个起点很好，但若要让它们像成熟的对象那样参与整个系统的工作，它们就必须承担一定责任。
## 二十一. Refused Bequest(被拒绝的遗赠)
1. 子类应该继承超类的函数和数据。但如果他们得到所有礼物，却只从中挑选几样来玩！又该怎么办呢？
2. 按传统做法，你需要为这个子类新建一个兄弟类，再运用`Push Down Method`(函数下移)和`Push Down Field`(字段下移)把所有用不到的函数从超类下推给那个兄弟。这样，超类就只持有所有子类共享的东西。
3. 我们不建议你胡乱修改继承体系，应该运用`Replace Inheritance with Delegation`(以委托取代继承)来达到目的。
## 二十二. Comments(过多的注释)
1. 注释本身不是一种坏味道，事实上他们还是一种香味呢。
2. 有时候，注释之所以存在乃是因为代码很糟糕。把注释当做除臭剂是一种坏味道。
3. 很多时候，注释可以帮助我们找到代码的坏味道。找到坏味道之后，我们首先应该以各种重构手法把坏味道去除。完成之后我们常常会发现：注释已经变得多余了，因为代码已经清晰说明了这一切。
4. 如果你需要注释来解释一块代码做了什么，试试`Extract Method`(提炼函数)；如果函数已经提炼出来，但还是需要注释来解释其行为，试试`Rename Method`(函数改名)；如果你需要注释说明某些系统的需求规格，试试`Introduce Assertion`(引入断言)。
5. 当你感觉需要撰写注释时，请先尝试重构，试着让所有注释都变得多余。
6. 注释应该用来记述将来的打算、标记你并无十足把握的区域。你可以在注释里写下自己“为什么做某某事”。这类信息可以帮助将来的修改者，尤其是那些健忘的家伙。
# Chapter3 - 重新组织函数
## 一. Extract Method(提炼函数)
### 介绍
1. 场景
你有一段代码可以被组织在一起并独立出来。
2. 手法
将这段代码放进一个独立的函数中，并让函数名称解释该函数的作用。
### 动机
1. 一段过长的函数或者需要注释才能让人理解用途的函数可以放进一个独立的函数中。
2. 使用简短且命名良好的函数的好处
① 细粒度函数易于复用。
② 细粒度函数易于复写。
③ 高层函数读起来像一系列注释。
3. 函数名好坏的关键在于函数名称与函数本体之间的语义距离，而不是函数名称的长短。
### 做法
① 创造新函数，以函数的意图命名。
② 将提炼出的代码从源函数复制到新建的目标函数中。
③ 检查提炼出的代码是否是否有源函数局部变量和参数。
④ 检查提炼出的代码是否有仅用于被提炼代码段的临时变量。
⑤ 检查提炼出的代码是否有源函数的任何局部变量的值被它改变。
### 范例
**重构前**
```
  printOwing() {
    const arr = [1,2,3]
    let sum = 0

    //print banner
    console.log(`--------------`)
    console.log(`Customer Owes`)
    console.log(`--------------`)

    arr.forEach(item => {
      sum += item
    })
    
    //print details
    console.log(`name: ${this._name}`)
    console.log(`amount: ${sum}`)
  }
```
**重构后**
```
 printOwing() {
    const sum = this.getOutStanding()
    this.printBanner()
    this.printDetails(sum)
  }

  getOutStanding() {
    const arr = [1,2,3]
    let sum = 0
    arr.forEach(item => {
      sum += item
    })
    return sum
  }

  printBanner() {
    console.log(`--------------`)
    console.log(`Customer Owes`)
    console.log(`--------------`)
  }

  printDetails(sum) {
    console.log(`name: ${this._name}`)
    console.log(`amount: ${sum}`)
  }
```
## 二. Inline Method(内联函数)
### 介绍
1. 场景
一个函数的本体与名称同样清楚易懂。
2. 手法
在函数调用点插入函数本体，然后移除该函数。
### 范例
**重构前**
```
class InlineMethod{
  constructor() {
    this._numberOfLateDeliveries = 6
  }

  getRatine() {
    return this.moreThanFiveLateDeliveries() ? 2 : 1
  }

  moreThanFiveLateDeliveries() {
    return this._numberOfLateDeliveries > 5
  }
}
```
**重构后**
```
class InlineMethod{
  constructor() {
    this._numberOfLateDeliveries = 6
  }

  getRatine() {
    return this._numberOfLateDeliveries > 5 ? 2 : 1
  }
}
```
## 三. Inline Temp(内联临时变量)
### 介绍
1. 场景
你有一个临时变量，只被一个简单表达式赋值一次，而它妨碍了其他重构手法。
2. 手法
将所有对该变量的引用动作替换为对它赋值的那个表达式本身。
### 范例
**重构前**
```
const basePrice = this.anOrder.basePrice();
return basePrice > 1000
```
**重构后** 
```
return  this.anOrder.basePrice() > 1000
```
## 四. Replace Temp with Query(以查询取代临时变量)
### 介绍
1. 场景
你的程序以一个临时变量保存某一表达式的运算结果。
2. 手法
将这个表达式提炼到一个独立函数中，将这个临时变量的所有引用点替换为对新函数的调用。此后，新函数就可以被其他函数使用。
### 动机
1. 临时变量只能在所属函数中使用，查询方法可以被用一个类中所有方法调用。
2. 局部变量会使代码难以被提炼，所以应该尽可能把他们替换成查询方法。
### 范例
**重构前**
```
class ReplaceTempWithQuery {
  getPrice() {
    const basePrice = this._quantity * this._itemPrice
    let discountFactory
    if(basePrice > 1000) {
      discountFactor = 0.95
    } else {
      discountFactor = 0.98
    }
    return basePrice * discountFactor
  }
}
```
**重构后**
```
class ReplaceTempWithQuery {
  getPrice() { 
    return basePrice() * discountFactor()
  }

  basePrice() {
    return this._quantity * this._itemPrice
  }

  discountFactor() {
    return this.basePrice() > 1000 ? 0.95 : 0.98
  }
}
```
## 五. Introduce Explaining Variable(引入解释性变量)
### 介绍
1. 场景
你有一个复杂的表达式。
2. 手法
将该复杂表达式（或其中一部分）的结果放进一个临时变量，以此变量名称来解释表达式用途。
### 动机
1. 临时变量可以帮助你将复杂且难以理解的表达式分解为容易管理的形式。
2. 我不用常使用该重构手法，我比较喜欢使用 **6.1 Extract Method(提炼函数)**，因为同一个对象中的任何部分，都可以根据自己的需要取用这些提炼出来的函数。
### 范例
**重构前**
```
  price() {
    //price is base price - quantity discount + shipping
    return this._quantity * this._itemPrice - 
    Math.max(0, this._quantity - 500) * this._itemPrice * 0.05 +
    Math.min(this._quantity * this._itemPrice * 0.1, 100.0)
  }
```
**重构后：Introduce Explaining Variable(引入解释性变量)**
```
  price() {
    const basePrice = this._quantity * this._itemPrice
    const quantityDiscount = Math.max(0, this._quantity - 500) * this._itemPrice * 0.05
    const shipping = Math.min(basePrice * 0.1, 100.0)
    return basePrice - quantityDiscount + shipping
  }
```
**重构后：Extract Method(提炼函数)**
```
  price() {
    return this.basePrice() - this.quantityDiscount() +this.shipping()
  }

  basePrice() {
    return this._quantity * this._itemPrice
  }

  quantityDiscount(){
    return Math.max(0, this._quantity - 500) * this._itemPrice * 0.05
  }

  shipping() {
    Math.min(basePrice * 0.1, 100.0)
  }
```
## 六. Split Temporary Varibale(分解临时变量)
### 介绍
1. 场景
你的程序有某个临时变量被赋值超过一次，它既不是循环变量，也不被用于收集计算结果。
2. 手法
针对每次赋值，创造一个独立、对应的临时变量。
### 动机
1. 临时变量有各种不同用途，其中某些用途会很自然地导致多次赋值。“循环变量”和“结果收集变量”就是两个典型例子。
2. 除了这两种情况，如果临时变量承担多个责任，它就应该被替换（分解）为多个临时变量，每个变量只被赋值一次，只承担一个责任。
### 范例
**重构前**
```
let temp = 2 * (_width + _height)
console.log(temp)
temp = _height * _width
console.log(temp)
```
**重构后**
```
const perimeter = 2 * (_width + _height)
console.log(perimeter)
const area = _height * _width
console.log(area)
```
## 七. Remove Assignments to Parameters(移除对参数的赋值)
### 介绍
1. 场景
代码对一个参数进行赋值。
2. 手法
以一个临时变量取代该参数的位置。
### 动机
1. 对象的引用是按值传递的。因此，我们可以修改参数对象的内部状态，但对参数对象重新赋值是没有意义的。
2. 在按值传递的情况下，对参数的重新赋值会降低代码的清晰度，而且混用了按值传递和按引用传递这两种参数传递方式。
### 范例
**重构前**
```
const discount = (inputVal, quantity, yearToDate) => {
  if(inputVal > 50) inputVal -= 2
  if(quantity > 100) inputVal -= 1
  if(yearToDate > 1000) inputVal -= 4
  return inputVal
}
```
**重构后**
```
const discount = (inputVal, quantity, yearToDate) => {
  let result = inputVal
  if(inputVal > 50) result -= 2
  if(quantity > 100) result -= 1
  if(yearToDate > 1000) result -= 4
  return result
}
```
## 八. Replace Method with Method Object(以函数对象取代函数)
### 介绍
1. 场景
你有一个大型函数，其中对局部变量的使用使你无法采用**Extract Method(提炼函数)**。
2. 手法
将这个函数放进一个单独对象中，如此一来局部变量就成了对象内的字段。然后你可以在同一个对象中将这个大型函数分解为多个小型函数。
### 动机
1. 将相对独立的代码从大型函数中提炼出来，可以大大提高代码的可读性。但是，局部变量的存在会增加函数分解难度。
2. 该重构手法会将所有局部变量都变成函数对象的字段。然后你就可以对象这个新对象使用**Extract Method(提炼函数)**创造出新函数，从而将原本的大型函数拆解。
### 范例
**重构前**
```
class Account {
  gamma(inputVal, quantity, yearToDate) {
    let importantValue1 = (inputVal * quantity) + this.delta()
    let importantValue2 = (inputVal * yearToDate) + 100
    if(yearToDate - importantValue1 > 100) {
      importantValue2 -= 20
    }
    let importantValue3 = importantValue2 * 7
    return importantValue3 - 2 * importantValue1
  }
}
```
**重构后**
```
class Account {
  gamma(inputVal, quantity, yearToDate) {
    return new Gamma(this, inputVal, quantity, yearToDate).compute()
  }
}

class Gamma {
  _account;
  inputVal;
  quantity;
  yearToDate;
  importantValue1;
  importantValue2;
  importantValue3;

  constructor(account, inputVal, quantity, yearToDate) {
    this._account = account
    this.inputVal = inputVal
    this.quantity = quantity
    this.yearToDate = yearToDate
  }

  compute() {
    this.importantValue1 = (this.inputVal * this.quantity) + this._account.delta()
    this.importantValue2 = (this.inputVal * this.yearToDate) + 100
    if(this.yearToDate - this.importantValue1 > 100) {
      this.importantValue2 -= 20
    }
    this.importantValue3 = importantValue2 * 7
    return this.importantValue3 - 2 * this.importantValue1
  }
 }
```
现在可以轻松地对`compute()`函数采取**6.1 Extract Method(提炼函数)**，不必担心参数传递的问题。
## 九. Substitute Algorithm(替换算法)
### 介绍
1. 场景
你想要把某个算法替换为另一个更清晰的算法。
2. 手法
将函数本体替换为另一个算法。
### 动机
1. 如果你发现做一件事情可以有更清晰的方式，就应该以较清晰的方式取代复杂的方式。
2. 替换一个巨大而复杂的算法是非常困难的，只要先将它分解为教简单的小型函数，然后你才能很有把握地进行算法替换工作。
### 范例
**重构前**
```
const foundPerson = (people) => {
  for(let i = 0; i < people.length; i++) {
    if(people[i] === 'Don') {
      return 'Don'
    }
    if(people[i] === 'John') {
      return 'John'
    }
    if(people[i] === 'Kent') {
      return 'Kent'
    }
    return ''
  }
}
```
**重构后**
```
const foundPerson = (people) => {
  let candidates = ['Don', 'John', 'Kent']
  for(let i = 0; i < people.length; i++) {
    if(candidates.includes(people[i])) {
      return people[i]
    }
  }
  return ''
}
```
# Chapter4 - 在对象之间搬移特性
## 一. Move Method(搬移函数)
### 介绍
1. 场景
你的程序中，有个函数与其所驻类之外的另一个类进行更多交流：调用后者，或被后者调用。
2. 手法
在该函数最常引用的类中建立一个有着类似行为的新函数。将旧函数变成一个单纯的委托函数，或是将旧函数完全移除。
### 动机
1. “搬移函数”是重构理论的支柱，可以使系统中的类更简单。
2. 如果一个类有太多行为，或如果一个类与另一个类有太多合作而形成高度耦合，我就会搬移函数。
### 范例
**重构前**
```
class Account {
  overdraftCharge() {
    if(this._type.isPremium()) {
      let result = 10
      if(this._daysOverdrawn > 7) {
        result += (this._daysOverdrawn -7) * 0.85
      }
      return result
    } else {
      return this._daysOverdrawn * 1.75
    }
  }

  bankCharge() {
    const result = 4.5 
    if(this._daysOverdrawn > 0) {
      result += this.overdraftCharge()
    }
    return result
  }
}
```
**重构后**
```
class Account {
  bankCharge() {
    const result = 4.5 
    if(this._daysOverdrawn > 0) {
      result += this._type.overdraftCharge(this._daysOverdrawn)
    }
    return result
  }
}

class AccountType {
  overdraftCharge(daysOverdrawn) {
    if(this.isPremium()) {
      let result = 10
      if(daysOverdrawn > 7) {
        result += (daysOverdrawn -7) * 0.85
      }
      return result
    } else {
      return daysOverdrawn * 1.75
    }
  }
}
```
如果被搬移函数调用了`Account`中的另一个函数，我就不能简单地处理。这种情况下必须将源对象传递给目标函数。
```
class AccountType {
  overdraftCharge(account) {
    if(this.isPremium()) {
      let result = 10
      if(account.getDaysOverdrawn() > 7) {
        result += (account.getDaysOverdrawn() -7) * 0.85
      }
      return result
    } else {
      return account.getDaysOverdrawn() * 1.75
    }
  }
}
```
## 二. Move Field(搬移字段)
### 介绍
1. 场景
在你的程序中，某个字段被其所驻类之外的另一个类更多地用到。
2. 手法
在目标类新建一个字段，修改源字段的所有用户，令他们改用新字段。
### 动机
1. 在类之间移动状态和行为，是重构过程中必不可少的措施。
2. 使用**Extract Class(提炼类)**时，我也可能需要搬移字段。此时我会先搬移字段，然后再搬移函数。
### 范例
1. 搬移只有一个函数使用的字段

**重构前**
```
class Account {
  _type: AccountType;
  _interestRate: number;

  interestForAmount_days(amount, days) {
    return this._interestRate * amount * days / 365
  }
}
```
**重构后**
```
class Account {
  _type: AccountType;

  interestForAmount_days(amount, days) {
    return this._type.getInterestRate() * amount * days / 365
  }
}

class AccountType {
  _interestRate: number;

  setInterestRate(arg) {
    this._interestRate = arg
  }

  getInterestRate() {
    return this._interestRate
  }
}
```
2. 搬移有多个函数使用的字段

**重构前**
```
class Account {
  _interestRate: number;
  _type: AccountType;

  interestForAmount_days(amount, days) {
    return this.getInterestRate() * amount * days / 365
  }

  getInterestRate() {
    return this._interestRate
  }

  setInterestRate(arg) {
    this._interestRate = arg
  }
}
```
**重构后**
```
class Account {
  _type: AccountType;

  interestForAmount_days(amount, days) {
    return this.getInterestRate() * amount * days / 365
  }

  getInterestRate() {
    return this._type.getInterestRate()
  }

  setInterestRate(arg) {
    this._type.setInterestRate(arg)
  }
}

class AccountType {
  _interestRate: number;
  
  setInterestRate(arg) {
    this._interestRate = arg
  }

  getInterestRate() {
    return this._interestRate
  }
}
```
## 三. Extract Class(提炼类)
### 介绍
1. 场景
某个类做了应该由两个类做的事。
2. 手法
建立一个新类，将相关的字段和函数从旧类搬移到新类。
### 动机
1. 一个类应该是一个清楚的抽象，处理一些明确的责任。
2. 给类添加一项新责任时，你会觉得不值得为这项责任分离出一个单独的类。随着责任不断增加，这个类会变得过分复杂，成为一团乱麻。
3. 如果某些数据和某些函数总是一起出现，某些数据经常同时变化甚至彼此相依，这就表示你应该将他们分离出去。
### 范例
**重构前**
```
class Person{
  _name: string;
  _officeAreaCode: string;
  _officeNumber: string;

  getName() {
    return this._name
  }

  getTelephoneNumber() {
    return `(${this._officeAreaCode})${this._officeNumber}`
  }

  getOfficeAreaCode() {
    return this._officeAreaCode
  }

  setOfficeAreaCode(arg) {
    this._officeAreaCode = arg
  }

  getOfficeNumber() {
    return this._officeNumber
  }

  setOfficeNumber(arg) {
    this._officeNumber = arg
  }
}
```
**重构后**
```
class Person {
  _name: string;
  _officeTelephone = new TelephoneNumber()

  getName() {
    return this._name
  }

  getTelephoneNumber() {
    return this._officeTelephone.getTelephoneNumber()
  }

  getOfficeTelephone() {
    return this._officeTelephone
  }
}

class TelephoneNumber {
  _areaCode: string;
  _number: string;

  getTelephoneNumber() {
    return `(${this._areaCode})${this._number}`
  }

  getAreaCode() {
    return this._areaCode
  }

  setAreaCode(arg) {
    this._areaCode = arg
  }

  getNumber() {
    return this._number
  }

  setNumber(arg) {
    this._number = arg
  }
}
```
## 四. Inline Class(将类内联化)
### 介绍
1. 场景
某个类没有做太多事情。
2. 手法
将这个类的所有特性搬移到另一个类中，然后移除原类。
### 动机
1. **Inline Class(将类内联化)**正好与**Extract Class(提炼类)**相反。
2. 如果一个类不再承担足够责任、不再有单独存在的理由，我们就会挑选这一“萎缩类”的最频繁用户（也是个类），以**Inline Class**手法将“萎缩类”塞进另一个类中。
### 范例
**重构前**
```
class Person {
  _name: string;
  _officeTelephone = new TelephoneNumber()

  getName() {
    return this._name
  }

  getTelephoneNumber() {
    return this._officeTelephone.getTelephoneNumber()
  }

  getOfficeTelephone() {
    return this._officeTelephone
  }
}

class TelephoneNumber {
  _areaCode: string;
  _number: string;

  getTelephoneNumber() {
    return `(${this._areaCode})${this._number}`
  }

  getAreaCode() {
    return this._areaCode
  }

  setAreaCode(arg) {
    this._areaCode = arg
  }

  getNumber() {
    return this._number
  }

  setNumber(arg) {
    this._number = arg
  }
}
```
**重构后**
```
class Person{
  _name: string;
  _officeAreaCode: string;
  _officeNumber: string;

  getName() {
    return this._name
  }

  getTelephoneNumber() {
    return `(${this._officeAreaCode})${this._officeNumber}`
  }

  getOfficeAreaCode() {
    return this._officeAreaCode
  }

  setOfficeAreaCode(arg) {
    this._officeAreaCode = arg
  }

  getOfficeNumber() {
    return this._officeNumber
  }

  setOfficeNumber(arg) {
    this._officeNumber = arg
  }
}
```
## 五. Hide Delegate(隐藏“委托关系”)
### 介绍
1. 场景
客户通过一个委托类来调用另一个对象。
2. 手法
在服务类上建立客户所需的所有函数，用以隐藏委托关系。
### 动机
1. “封装”即使不是对象的最关键特征，也是最关键特征之一。
2. “封装”意味每个对象都应该尽可能少了解系统的其他部分，一旦发生变化，需要了解这一变化的对象就会比较少。
3. 隐藏“委托关系”，当委托关系发生变化时，变化也将被限制在服务对象中，不会波及客户。
4. 一旦你对所有客户都隐藏了委托关系，就不再需要在服务对象的接口中公开被委托对象了。
### 范例
**重构前**
```
class Person {
  _department: Department;

  getDepartment() {
    return this._department
  }

  setDepartment(arg) {
    this._department = arg
  }
}

class Department {
  _chargeCode: string;
  _manager: Person;

  Department(manager) {
    this._manager = manager
  }

  getManager() {
    return this._manager
  }
}

const m = john.getDepartment().getManager()
```
**重构后**
```
class Person {
  _department: Department;

  getManager() {
    return this._department.getManager()
  }

  setDepartment(arg) {
    this._department = arg
  }
}

const m = john.getManager()
```
## 六. Remove Middle Man(移除中间人)
### 介绍
1. 场景
某个类做了过多的简单委托动作。
2. 手法
让客户直接调用受托类。
### 动机
1. “封装受委托对象”的代价就是：每当客户要使用受托类的新特性时，必须在服务类添加一个简单委托函数。
2. 随着受托类特性越来越复杂，委托函数越来越多，服务类完全成了一个“中间人”，此时你就应该让客户直接调用受托类。
3. 重构的意义就在于：你永远不必说对不起——只要把出问题的地方修补好就行了。
### 范例
**重构前**
```
class Person {
  _department: Department;

  getManager() {
    return this._department.getManager()
  }

  setDepartment(arg) {
    this._department = arg
  }
}

class Department {
  _chargeCode: string;
  _manager: Person;

  Department(manager) {
    this._manager = manager
  }

  getManager() {
    return this._manager
  }
}

const m = john.getManager()
```
**重构后**
```
class Person {
  _department: Department;

  getDepartment() {
    return this._department
  }

  setDepartment(arg) {
    this._department = arg
  }
}

const m = john.getDepartment().getManager()
```
## 七. Introduce Foreign Method(引入外加函数)
### 介绍
1. 场景
你需要为提供服务的类增加一个函数，但你无法修改这个类。
2. 手法
在客户类中建立一个函数，并以第一参数形式传入一个服务类实例。
### 范例
**重构前**
```
//创建一个日期的下一天
const newStart = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
```
**重构后**
```
const nextDay = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

const newStart = nextDay(date)
```
## 八. Introduce Local Extension(引入本地扩展)
### 介绍
1. 场景
你需要为服务类提供一些额外函数，但你无法修改这个类。
2. 手法
建立一个新类，使它包含这些额外函数。让这个扩展品成为源类的子类或包装类。
### 动机
1. 你需要为提供服务的类增加多个函数，但你无法修改这个类。
2. 你需要将这些函数组织在一起，放到一个合适的地方去。子类化(`subclassing`)和包装(`wrapping`)是两种常用的本地扩展。
3. 本地扩展是一个独立的类，但也是被扩展类的子类型：它提供源类的一切特性，同时额外添加新特性。
### 范例
**使用子类**
```
class MfDateSub extends Date{
  nextDay() {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1)
  }
}

const mySubDate = new MfDateSub(2018, 9, 10)
console.log(mySubDate.nextDay())
```
注释：该代码只是为了演示使用子类扩展方式的原理，运行会报错。
**使用包装类**
```
class MfDateWrap {
  constructor() {
    this._original = new Date(...arguments)
  }

  getFullYear() {
    return this._original.getFullYear()
  }

  getMonth() {
    return this._original.getMonth()
  }

  getDate() {
    return this._original.getDate()
  }

  nextDay() {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1)
  }
}

const mfDateWrap = new MfDateWrap(2018, 9, 10)
console.log(mfDateWrap.nextDay())
```
注释：使用包装类时需要为原始类（`Date`）的所有函数提供委托函数，这里只展示了三个函数，其他函数的处理依此类推。
# Chapter5 - 重新组织数据
## 一. Self Encapsulate Field(自封装字段)
### 介绍
1. 场景
你直接访问一个字段，但与字段之间的耦合关系逐渐变得笨拙。
2. 手法
为这个字段建立取值/设置函数，并且只以这些函数来访问字段。
### 动机
1. 在“字段访问方式”这个问题上，存在两种截然不同的观点：其中一派认为，在该变量定义所在的类中，你可以自由访问它；另一派认为，即使在这个类中你也应该只使用访问函数间接访问。
2. 间接访问的好处是，子类可以通过覆写一个函数而改变获取数据的途径；它还支持更灵活的数据管理方式，例如延迟初始化。直接访问的好处是，代码比较容易阅读。
3. 我比较喜欢先使用直接访问方式，直到这种方式给我带来麻烦为止，此时我就会转而使用间接访问方式。重构给我改变主意的自由。
4. 如果你想访问超类中的一个字段，却又想在子类中将对这个变量的访问改为一个计算后的值，这就是最该使用**Self Encapsulate Field(自封装字段)**的时候。
### 范例
**重构前**
```
class IntRange {
  constructor(low, high) {
    this._low = low
    this._high = high
  }

  includes(arg) {
   return arg > this._low && arg < this._high 
  }

  grow(factor) {
    this._high *= factor
  }
}
```
**重构后**
```
class IntRange {
  constructor(low, high) {
    this.initialize(low, high)
  }

  initialize(low, high) {
    this._low = low
    this._high = high
  }

  includes(arg) {
    return arg > this.getLow() && arg < this.getHigh()
  }

  grow(factor) {
    this.setHigh(factor * this.getHigh())
  }

  getLow() {
    return this._low
  }

  setLow(arg) {
    this._low = arg
  }

  getHigh() {
    return this._high
  }

  setHigh(arg) {
    this._high = arg
  }
}

class CappedRange extends IntRange {
  constructor(low, high, cap) {
    super(low, high)
    this._cap = cap
  }

  getCap() {
    return this._cap
  }

  getHigh() {
    return Math.min(super.getHigh(), this.getCap())
  }
}
```
可以在`CappedRange`中覆写`getHigh()`，从而加入对“范围上限”(`cap`)的考虑，而不必修改`IntRange`的任何行为。
## 二. Replace Data Value with Object（以对象取代数据值）
### 介绍
1. 场景
你有一个数据项，需要与其他数据和行为一起使用才有意义。
2. 手法
将数据项变成对象。
### 范例
**重构前**
```
class Order {
  constructor(customer) {
    this._customer = customer
  }

  getCustomer() {
    return this._customer
  }

  setCustomer(arg) {
    this._customer = arg
  }
}
```
**重构后**
```
class Customer {
  constructor(name) {
    this._name = name
  }

  getName() {
    return this._name
  }
}

class Order {
  constructor(customerName) {
    this._customer = new Customer(customerName)
  }

  getCustomerName() {
    return this._customer.getName()
  }

  setCustomer(customerName) {
    this._customer = new Customer(customerName)
  }
}
```
## 三. Change Value to Reference（将值对象改为引用对象）
### 介绍
1. 场景
你从一个类衍生出许多彼此相等的实例，希望将他们替换为同一个对象。
2. 手法
将这个值对象变成引用对象。
### 动机
1. 有时候，你会从一个简单的值对象开始，在其中保存少量不可修改的数据。
2. 而后，你可能会希望给这个对象加入一些可修改数据，并确保对任何一个对象的修改都能影响到所有引用此一对象的地方。这时候你就需要将这个对象变成一个引用对象。
### 范例
**重构前**
```
class Customer {
  constructor(name) {
    this._name = name
  }

  getName() {
    return this._name
  }
}

class Order {
  constructor(customerName) {
    this._customer = new Customer(customerName)
  }

  getCustomerName() {
    return this._customer.getName()
  }

  setCustomer(customerName) {
    this._customer = new Customer(customerName)
  }
}
```
**重构后**
```
class Customer {
  static _instances = {};

  static loadCustomers() {
    new Customer('Lemon Car Hire').store()
    new Customer('Associated Coffee Mathines').store()
    new Customer('Bilston Gasworks').store()
  }

  static getNamed(name) {
    return Customer._instances[name]
  }

  constructor(name) {
    this._name = name
  }

  store() {
    Customer._instances[this.getName()] = this
  }

  getName() {
    return this._name
  }
}

Customer.loadCustomers()

class Order {
  constructor(customerName) {
    this._customer = Customer.getNamed(customerName)
  }

  getCustomerName() {
    return this._customer.getName()
  }

  setCustomer(customerName) {
    this._customer = new Customer(customerName)
  }
}
```
## 四. Change Reference to Value(将引用对象改为值对象)
### 介绍
1. 场景
你有一个引用对象，很小且不可变，而且不易管理。
2. 手法
将它变成一个值对象。
### 动机
1. 值对象有一个非常重要的特性：他们应该是不可变的。
2. 不可变的含义为该对象本身不可改变，但你可以使用另一个对象来取代现有的对象，而不是在现有对象上修改。其他对象与该对象之间的关系可以改变。
### 范例
**重构前**
```
class Currency {
  constructor(code) {
    this._code = code
  }

  getCode() {
    return this._code
  }

  equals(arg) {
    return this === arg
  }
}

console.log(new Currency('USD').equals(new Currency('USD'))); //false 
```
**重构后**
```
class Currency {
  constructor(code) {
    this._code = code
  }

  getCode() {
    return this._code
  }

  equals(arg) {
    if(!(arg instanceof Currency)) {
      return false
    }
    return this._code === arg._code
  }
}

console.log(new Currency('USD').equals(new Currency('USD'))); //true
```
## 五. Replace Array with Object（以对象取代数组）
### 介绍
1. 场景
你有一个数组，其中的元素各自代表不同的东西。
2. 手法
以对象替换数组。对于数组中的每个元素，以一个字段来表示。
### 范例
**重构前**
```
const row = []
row[0] = 'Liverpool'  //队名
row[1] = 15 //获胜场次
```
**重构后**
```
const row = {}
row['name'] = 'Liverpool'
row['win'] = 15
```
## 六. Duplicate Observed Data(复制“被监视数据”)
### 介绍
1. 场景
你有一些领域数据置身于`GUI`控件中，而领域函数需要访问这些数据。
2. 手法
将该数据复制到一个领域对象中。建立一个`Observer`模式，用以同步领域对象和`GUI`对象内的重复数据。
### 范例
`JavaScript`中无`Observer`类，无法用类似代码演示`Observer`模式。
## 七. Change Unidirectional Association to Bidirectional(将单向关联改为双向关联)
### 介绍
1. 场景
两个类都需要使用对方特性，但其间只有一条单向连接。
2. 手法
添加一个反向指针，并使修改函数能够同时更新两条连接。
### 范例
**重构前**
```
class Customer{}

class Order {
  getCustomer() {
    return this._customer
  }

  setCustomer(arg) {
    this._customer = arg
  }
}
```
**重构后**
```
class Customer {
  _orders = new Set()

  friendOrders() {
    return this._orders
  }

  addOrder(arg) {
    arg.setCustomer(this)
  }
}

class Order {
  getCustomer() {
    return this._customer
  }

  /**
   * 控制函数
   * @param {} arg 
   */
  setCustomer(arg) {
    if(arg) {
      this._customer.friendOrders().delete(this)
    }
    this._customer = arg
    if(this._customer) {
      this._customer.friendOrders().add(this)
    }
  }
}
```
我比较喜欢让单个类来负责控制关联关系，这样可以将所有处理关联关系的逻辑集中安置于一地。
① 如果关联是“一对多”，那么久由“拥有单一引用”的那一方承担“控制者”角色。
② 如果某个对象是另一个对象的部件，那么由后者负责控制关联关系。
③ 如果关联是“多对多”关系，那么随便其中哪个对象来控制关联关系，都无所谓。
## 八. Change Bidirectional Association to Unidirectional(将双向关联改为单向关联)
### 介绍
1. 场景
两个类之间有双向关联，但其中一个类如今不再需要另一个类的特性。
2. 手法
去除不必要的关联。
### 动机
1. 维护双向连接、确保对象被正确创建和删除会增加复杂度。
2. 双向连接容易造成“僵尸对象”：某个对象本身已经该死亡了，却仍然保留在系统中，因为对它的引用还没有完全清除。
3. 双向关联迫使两个类之间有了依赖：对其中任何一个类的任何修改，都可能引发另一个类的变化。
4. 只有在真正需要双向关联的时候，才应该使用它。如果发现双向关联不再有存在价值，就应该去掉其中不必要的一条关联。
### 范例
**重构前**
```
class Customer {
  _orders = new Set()

  friendOrders() {
    return this._orders
  }

  addOrder(arg) {
    arg.setCustomer(this)
  }

  getPriceFor(order) {
    return order.getDiscountedPrice()
  }
}

class Order {
  getCustomer() {
    return this._customer
  }

  /**
   * 控制函数
   * @param {} arg 
   */
  setCustomer(arg) {
    if(arg) {
      this._customer.friendOrders().delete(this)
    }
    this._customer = arg
    if(this._customer) {
      this._customer.friendOrders().add(this)
    }
  }

  getDiscountedPrice() {
    return this.getGrossPrice() * (1- this._customer.getDiscount())
  }
}
```
**重构后**
```
class Customer {
  _orders = new Set()

  friendOrders() {
    return this._orders
  }

  addOrder(arg) {
    arg.setCustomer(this)
  }

  getPriceFor(order) {
    return order.getDiscountedPrice(this)
  }
}

class Order {
  getDiscountedPrice(customer) {
    return this.getGrossPrice() * (1- customer.getDiscount())
  }
}
```
## 九. Replace Magic Number with Symbolic Constant（以字面常量取代魔法数）
### 介绍
1. 场景
你有一个字面数值，带有特别含义。
2. 手法
创造一个常量，根据其意义为它命令，并将上述的字面数值替换为这个常量。
### 范例
**重构前**
```
const potentialEnergy = (mass, height) => {
  return mass * 9.81 * height
} 
```
**重构后**
```
const GRAVITATIONAL_CONSTANT = 9.81

const potentialEnergy = (mass, height) => {
  return mass * GRAVITATIONAL_CONSTANT * height
} 
```
## 十. Encapsulate Field（封装字段）
### 介绍
1. 场景
你的类中存在一个`public`字段。
2. 手法
将它声明为`private`，并提供相应的访问函数。
### 范例
在`JavaScript`中，没有访问权限修饰符，该重构手法无法演示。
## 十一. Encapsulate Collection（封装集合）
### 介绍
1. 场景
有个函数返回一个集合。
2. 手法
让这个函数返回该集合的一个只读副本，并在这个类中提供添加/移除集合元素的函数。
### 动机
1. 取值函数不应该返回集合自身，因为这会让用户得以修改集合内容而集合拥有者却一无所知。
2. 不应该为整个集合提供一个设值函数，但应该提供用以为集合添加/移除元素的函数。这样，集合拥有者（对象）就可以控制集合元素的添加和移除。
### 范例
**重构前**
```
class Course {
  constructor(name, isAdvanced) {
    this._name = name
    this._isAdvanced = isAdvanced
  }

  isAdvanced() {
    return this._isAdvanced
  }
}

class Person {
  getCourses() {
    return this._courses
  }

  setCourses(arg) {
    this._courses = arg
  }
}
```
**重构后**
```
class Course {
  constructor(name, isAdvanced) {
    this._name = name
    this._isAdvanced = isAdvanced
  }

  isAdvanced() {
    return this._isAdvanced
  }
}

class Person {
  constructor() {
    this._courses = []
  }

  addCourse(arg) {
    return this._courses.push(arg)
  }

  removeCourse(arg) {
    this._courses.filter(item => item !== arg)
  }

  initializeCourses(arg) {
    this._courses = this._courses.concat(arg)
  }

  getCourses() {
    return this._courses.map(item => item)
  }
}
```
## 十二. Replace Record with Data Class(以数据类取代记录)
### 介绍
1. 场景
你需要面对传统编程环境中的记录结构。
2. 手法
为该记录创建一个“哑”数据对象。
## 十三. Replace Type Code with Class(以类取代类型码)
### 介绍
1. 场景
类之中有一个数值类型码，但它并不影响类的行为。
2. 手法
以一个新的类替换该数值类型码。
### 范例
**重构前**
```
class Person {
  static O = 0;
  static A = 1;
  static B = 2;
  static AB = 3;

  constructor(bloodGroup) {
    this._bloodGroup = bloodGroup
  }

  setBloodGroup(arg) {
    this._bloodGroup = arg
  }

  getBloodGroup() {
    return this._bloodGroup
  }
}
```
**重构后**
```
class BloodGroup{
  static O = new BloodGroup(0);
  static A = new BloodGroup(1);
  static B = new BloodGroup(2);
  static AB = new BloodGroup(3);
  static _values = [O, A, B, AB]

  constructor(code) {
    this._code = code
  }

  getCode() {
    return this._code
  }

  static code(arg) {
    return BloodGroup._values[arg]
  }
}

class Person {
  constructor(bloodGroup) {
    this._bloodGroup = bloodGroup
  }

  setBloodGroup(bloodGroup) {
    this._bloodGroup = bloodGroup
  }

  getBloodGroup() {
    return this._bloodGroup
  }
}
```
## 十四. Replace Type Code with Subclass（以子类取代类型码）
### 介绍
1. 场景
你有一个不可变的类型码，它会影响类的行为。
2. 手法
以子类取代这个类型码。
### 范例
**重构前**
```
class Employee {
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  constructor(type) {
    this._type = type
  }
}
```
**重构后**
```
class Employee {
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  static create(type) {
    switch(type) {
      case Employee.ENGINEER:
        return new Engineer()
      case Employee.SALESMAN:
        return new Saleseman()
      case Employee.MANAGER:
        return new Manager()
      default:
        throw new Error('Incorrect type code value')
    }
  }

  constructor(type) {
    this._type = type
  }

  getType() {
    return this._type
  }
}

class Engineer extends Employee {
  getType() {
    return Employee.ENGINEER
  }
}

class Saleseman extends Employee {
  getType() {
    return Employee.SALESMAN
  }
}

class Manager extends Employee {
  getType() {
    return Employee.MANAGER
  }
}
```
注释：类中添加`create`静态工厂方法。
应该进一步重构，将与特定种类雇员相关的函数和字段推到相关的子类去。
## 十五. Replace Type Code with State/Strategy(以State/Strategy取代类型码)
### 介绍
1. 场景
你有一个类型码，它会影响类的行为，但你无法通过继承手法消除它。
2. 手法
以状态对象取代类型码。
### 动机
1. 如果“类型码的值在对象生命周期中发生变化”或“其他原因使得宿主类不能被继承”，你可以使用本重构手法。
2. 本重构使用`State`模式或`Strategy`模式【`Gang of Four`】。
### 范例
**重构前**
```
class Employee {
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  constructor(type) {
    this._type = type
  }

  payAmount() {
    switch(this._type) {
      case Employee.ENGINEER:
        return this._monthlySalary
      case Employee.SALESMAN:
        return this._monthlySalary + this._commission
      case Employee.MANAGER:
        return this._monthlySalary + this._bonus
      default:
        throw new Error('Incorrect Employee') 
    }
  }
}
```
**重构后**
```
class Employee {
  constructor(type) {
    this._type = type
  }

  getType() {
    return this._type.getTypeCode()
  }

  setType(arg) {
    this._type = EmployeeType.newType(arg)
  }

  payAmount() {
    switch(this.getType()) {
      case EmployeeType.ENGINEER:
        return this._monthlySalary
      case EmployeeType.SALESMAN:
        return this._monthlySalary + this._commission
      case EmployeeType.MANAGER:
        return this._monthlySalary + this._bonus
      default:
        throw new Error('Incorrect Employee') 
    }
  }
}

class EmployeeType{
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  getTypeCode() {}

  newType() {
    switch(arg) {
      case EmployeeType.ENGINEER:
        return new Engineer()
      case EmployeeType.SALESMAN:
        return new Saleman()
      case EmployeeType.MANAGER:
        return new Manager()
      default:
        throw new Error('Incorrect Employee Code')
    }
  }
}

class Engineer extends EmployeeType {
  getTypeCode() {
    return Employee.ENGINEER
  }
}

class Manager extends EmployeeType {
  getTypeCode() {
    return Employee.MANAGER
  }
}

class Saleman extends EmployeeType{
  getTypeCode() {
    return Engineer.SALESMAN
  }
}
```
注释：将工厂方法写在父类中，与项目中的`widgetFactory`工厂对比。
## 十六. Replace Subclass with Fields(以字段取代子类)
### 介绍
1. 场景
你的各个子类的唯一差别只在“返回常量数据”的函数身上。
2. 手法
修改这些函数，使他们返回超类中的某个（新增）字段，然后销毁子类。
### 动机
1. 建立子类的目的，是为了增加新特性或变化其行为。
2. 若子类中只有常量函数，你可以在超类中设计一个与常量函数返回值相应的字段，从而完全去除这样的子类。这样可以避免因继承而带来的额外复杂性。
### 范例
**重构前**
```
class Person{
  isMale() {}
  getCode() {}
}

class Male extends Person {
  isMale() {
    return true
  }

  getCode() {
    return 'M'
  }
}

class Female extends Person {
  isMale() {
    return false
  }

  getCode() {
    return 'F'
  }
}
```
**重构后**
```
class Person{
  static createMale() {
    return new Person(true, 'M')
  }

  static createFemale() {
    return new Person(false, 'F')
  }

  constructor(isMale, code) {
    this._isMale= isMale
    this._code = code
  }

  isMale() {
    return this._isMale
  }
  getCode() {
    return this._code
  }
}
```
注释：`createXXX`静态工厂方法。
# Chapter6 - 简化条件表达式
## 一. Decompose Conditional(分解条件表达式)
### 介绍
1. 场景
你有一个复杂的条件（`if`-`then`-`else`）语句。
2. 手法
从`if`、`then`、 `else`三个段落中分别提炼出独立函数。
### 范例
**重构前**
```
class Production{
  price() {
    if(date.before(this.SUMMER_START) || date.after(this.SUMMER_END)) {
      return quantity * this._winterRate + this._winterServiceCharge
    } else {
      return quantity * _summerRate
    }
  }
}
```
**重构后**
```
class Production{
  price(date) {
    if(this.notSummer(date)) {
      return this.winterCharge(quantity)
    } else {
      return this.summerCharge(quantity)
    }
  }

  notSummer(date) {
   return date.before(this.SUMMER_START) || date.after(this.SUMMER_END)
  }

  winterCharge(quantity) {
   return quantity * this._winterRate + this._winterServiceCharge
  }

  summerCharge(quantity) {
    return quantity * _summerRate
  }
 }
```
## 二. Consolidate Conditional Expression(合并条件表达式)
1. 场景
你有一系列条件测试，都得到相同结果。
2. 手法
将这些测试合并为一个条件表达式，并将这个条件表达式提炼成为一个独立函数。
### 范例
1. 使用逻辑或
**重构前**
```
  disabilityAmount() {
    if(this._seniority < 2) return 0
    if(this._monthsDisabled > 12) return 0
    if(this._isPartTime) return 0
    // compute the disability amount
    //...
  }
```
**重构后**
```
  disabilityAmount() {
    if(this.isNotEligibleForDisability()) return 0
    // compute the disability amount
    //...
  }

  isNotEligibleForDisability() {
    return ((this._seniority < 2) || (this._monthsDisabled > 12) || (this._isPartTime))
  }
```
2. 使用逻辑与
**重构前**
```
  if(this.onVacation()) {
    if(this.lengthOfService() > 10) {
      return 1
    }
  }
  return 0.5
```
**重构后**
```
  return (this.onVacation() && this.lengthOfService() > 10) ? 1 : 0.5
```
## 三. Consolidate Duplicate Conditional Fragments(合并重复的条件片段)
### 介绍
1. 场景
在条件表达式的每个分支上有着相同的一段代码。
2. 手法
将这段重复代码搬移到条件表达式之外。
### 范例
**重构前**
```
if(this.isSpecialDeal()) {
  total = price * 0.95
  this.send()
} else {
  total = price * 0.98
  this.send()
}
```
**重构后**
```
if(this.isSpecialDeal()) {
  total = price * 0.95
} else {
  total = price * 0.98
}
this.send()
```
## 四. Remove Control Flag(移除控制标记)
### 介绍
1. 场景
在一系列布尔表达式中，某个变量带有“控制标记”的作用。
2. 手法
以`break`语句或者`return`语句取代控制标记。
### 动机
1. 人们之所以使用控制标记，因为结构化编程原则告诉他们：每个子程序只能有一个入口和一个出口。
2. 我赞同“单一入口”原则，但是“单一出口”原则会让你在代码中加入讨厌的控制标记，大大降低条件表达式的可读性。这就是编程语言提供`break`语句和`continue`语句的原因：用它们跳出复杂的条件语句。
### 范例
1. 以`break`取代简单的控制标记

**重构前**
```
function checkSecurity(peoples) {
  let found = false
  for(let i = 0; i < peoples.length; i++) {
    if(!found) {
      if(peoples[i] === 'Don' || peoples[i] === 'John') {
        sendAlert()
        found = true
      }
    }
  }
}
```
**重构后**
```
function checkSecurity(peoples) {
  for(let i = 0; i < peoples.length; i++) {
    if(peoples[i] === 'Don' || peoples[i] === 'John') {
      sendAlert()
      break;
    }
  }
}
```
2. 以`return`返回控制标记

**重构前**
```
function checkSecurity(peoples) {
  let found = ''
  for(let i = 0; i < peoples.length; i++) {
    if(!found) {
      if(peoples[i] === 'Don' || peoples[i] === 'John') {
        sendAlert()
        found = peoples[i]
      }
    }
  }
  someLaterCode(found)
}
```
**重构后**
```
function checkSecurity(peoples) {
  const found = foundMiscreant(peoples)
  someLaterCode(found)
}

function foundMiscreant(peoples) {
  for(let i = 0; i < peoples.length; i++) {
    if(peoples[i] === 'Don' || peoples[i] === 'John') {
      sendAlert()
      return peoples[i]
    }
  }
  return ''
}
```
## 五. Replace Nested Conditional with Guard Clauses(以卫语句取代嵌套条件表达式)
### 介绍
1. 场景
函数中的条件逻辑使人难以看清正常的执行路径。
2. 手法
使用卫语句表现所有特殊情况。
### 动机
1. 条件表达式通常有两种表现形式。第一种形式是：所有分支都属于正常行为。第二种形式则是：条件表达式提供的答案中只有一种是正常行为，其他都是不常见的情况。
2. 如果两条分支都是正常行为，就应该使用如`if...else...` 的条件表达式；如果某个条件极其罕见，就应该单独检查该条件，并在该条件为真时立即从函数中返回。这样的单独检查常常被称为“卫语句”。
3. 如今的编程语言都会强制保证每个函数只有一个入口。至于“单一出口”规则，其实并不是那么有用。在我看来，保持代码清晰才是最关键的。
### 范例
1. 使用卫语句

**重构前**
```
function getPayAmount() {
  let result;
  if(_isDead) {
    result = deadAmount()
  } else {
    if(_isSeparated) {
      result = separatedAmount()
    } else {
      if(_isRetired) {
        result = retiredAomunt()
      } else {
        result = normalPayAmount()
      }
    }
  }
  return result
}
```
**重构后**
```
function getPayAmount() {
  if(_isDead) return deadAmount()
  if(_isSeparated) return separatedAmount()
  if(_isRetired) return retiredAomunt()
  return normalPayAmount()
}
```
2. 将条件反转

**重构前**
```
function getAdjustedCapital() {
  let result = 0
  if(_capital > 0) {
    if(_intRate > 0 && _duration > 0) {
      result = (_income / _duration) * ADJ_FACTOR
    }
  }
  return result
}
```
**重构后**
```
function getAdjustedCapital() {
  if(_capital <= 0) return 0
  if(_intRate <= 0 || _duration <= 0) return 0
  return (_income / _duration) * ADJ_FACTOR
}
```
## 六. Replace Conditional with Polymorphism(以多态取代条件表达式)
### 介绍
1. 场景
你手上有个条件表达式，它根据对象类型的不同而选择不同的行为。
2. 手法
将这个条件表达式的每个分支放进一个子类内的覆写函数中，然后将原始函数声明为抽象函数。
### 动机
1. 多态最根本的好处就是：如果你需要根据对象的不同类型而采取不同的行为，多态使你不必编写明显的条件表达式。
2. 正是因为有了多态，你会发现“类型码的`switch`语句”以及“基于类型名称的`if-then-else`语句”在面向对象程序中很少出现。
### 范例
**重构前**
```
class Employee {
  constructor(type) {
    this._type = type
  }

  getType() {
    return this._type.getTypeCode()
  }

  setType(arg) {
    this._type = EmployeeType.newType(arg)
  }

  payAmount() {
    switch(this.getType()) {
      case EmployeeType.ENGINEER:
        return this._monthlySalary
      case EmployeeType.SALESMAN:
        return this._monthlySalary + this._commission
      case EmployeeType.MANAGER:
        return this._monthlySalary + this._bonus
      default:
        throw new Error('Incorrect Employee') 
    }
  }
}

class EmployeeType{
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  getTypeCode() {}

  newType() {
    switch(arg) {
      case EmployeeType.ENGINEER:
        return new Engineer()
      case EmployeeType.SALESMAN:
        return new Saleman()
      case EmployeeType.MANAGER:
        return new Manager()
      default:
        throw new Error('Incorrect Employee Code')
    }
  }
}

class Engineer extends EmployeeType {
  getTypeCode() {
    return Employee.ENGINEER
  }
}

class Manager extends EmployeeType {
  getTypeCode() {
    return Employee.MANAGER
  }
}

class Saleman extends EmployeeType{
  getTypeCode() {
    return Engineer.SALESMAN
  }
}
```
**重构后**
```
class Employee {
  constructor(type) {
    this._type = type
  }

  getType() {
    return this._type.getTypeCode()
  }

  setType(arg) {
    this._type = EmployeeType.newType(arg)
  }

  payAmount() {
    return this._type.payAmount()
  }
}

class EmployeeType{
  static ENGINEER = 0; //工程师
  static SALESMAN = 1; //销售员
  static MANAGER = 2; //管理者

  getTypeCode() {}

  newType() {
    switch(arg) {
      case EmployeeType.ENGINEER:
        return new Engineer()
      case EmployeeType.SALESMAN:
        return new Saleman()
      case EmployeeType.MANAGER:
        return new Manager()
      default:
        throw new Error('Incorrect Employee Code')
    }
  }

  payAmount(emp) {}
}

class Engineer extends EmployeeType {
  getTypeCode() {
    return Employee.ENGINEER
  }

  payAmount(emp) {
    return emp.getMonthlySalary()
  }
}

class Manager extends EmployeeType {
  getTypeCode() {
    return Employee.MANAGER
  }

  payAmount(emp) {
    return emp.getMonthlySalary() + emp.getCommission()
  }
}

class Saleman extends EmployeeType{
  getTypeCode() {
    return Engineer.SALESMAN
  }

  payAmount(emp) {
    return emp.getMonthlySalary() + emp.getBonus()
  }
}
```
## 七. Introduce Null Object（引入Null对象）
### 介绍
1. 场景
你需要再三检查某对象是否为`null`。
2. 手法
将`null`值替换为`null`对象。
### 动机
1. 多态的最根本好处在于：你不必再向对象询问“你是什么类型”而后根据得到的答案调用对象的某个行为——你只管调用该行为就是了，其他的一切多态机制会为你安排妥当。
2. 当某个字段内容是`null`时，多态可扮演另一个较不直观（亦较不为人所知）的用途。
3. 空对象一定是常量，他们的任何成分都不会发生变化。因此可以使用单例模式来实现他们。
### 范例
**重构前**
```
class Site {
  _customer;

  getCustomer() {
    return this._customer
  }
}

class Customer {
  getName() {}

  getPlan() {}

  getHistory() {}
}

class PaymentHistory {
  getWeeksDelinquentInLastYear() {}
}

//示例代码
const customer = site.getCustomer()
const plan = customer ? customer.getPlan() : BillingPlan.basic() 
const customerName = customer ? customer.getName() : 'occupant'
const weeksDelinquent = customer ? customer.getHistory().getWeeksDelinquentInLastYear() : 0
```
**重构后**
```
class Site {
  _customer;

  getCustomer() {
    return this._customer ? this._customer : Customer.newNull()
  }
}

class Customer {
  static newNull() {
    return new NullCustomer();
  }

  isNull() {
    return false
  }

  getName() {}

  getPlan() {}

  getHistory() {}
}

class NullCustomer extends Customer {
  isNull() {
    return true
  }

  getName() {
    return 'occupant'
  }

  getPlan() {
    return BillingPlan.basic() 
  }

  getHistory() {
    return PaymentHistory.newNull()
  }
}

class PaymentHistory {
  static newNull() {
    return new NullPaymentHistory();
  }

  getWeeksDelinquentInLastYear() {}
}

class NullPaymentHistory extends PaymentHistory {
  getWeeksDelinquentInLastYear() {
    return 0
  }
}

//示例代码
const customer = site.getCustomer()
const plan = customer.getPlan()
const customerName = customer.getName()
const weeksDelinquent = customer.getHistory().getWeeksDelinquentInLastYear()
```
## 八. Introduce Assertion（引入断言）
### 介绍
1. 场景
某一段代码需要对程序状态做出某种假设。
2. 手法
以断言明确表现这种假设。
### 动机
1. 常常有这样一段假设：只有当某个条件为真时，该段代码才能正常运行。例如平放根计算只对正值才能进行。
2. 这样的假设通常并没有在代码中明确表现出来，你必须阅读整个算法才能看出。有时候程序员会以注释写出这样的假设。使用断言明确标明这些假设是一种更好的技术。
3. 断言是一个条件表达式，应该一定总是真，如果它失败，表示程序员犯了错误。实际上，程序最后的成品往往将断言统统删除。
### 范例
**重构前**
```
getExpenseLimit() {
  return (_expenseLimit !== NULL_EXPENSE) ? 
          _expenseLimit :
          _primaryProject.getMemberExpenseLimit()
}
```
**重构后**
```
getExpenseLimit() {
  Assert.isTrue(_expenseLimit !== NULL_EXPENSE || _primaryProject !== null) 
  return (_expenseLimit !== NULL_EXPENSE) ? 
          _expenseLimit :
          _primaryProject.getMemberExpenseLimit()
}
```
# Chapter7 - 简化函数调用
## 一. Rename Method(函数改名)
### 介绍
1. 场景
函数的名称未能揭示函数的用途。
2. 手法
修改函数名称。
### 动机
1. 给函数命名有一个好方法：首先考虑应该给这个函数写上一句怎样的注释，然后想办法将注释编程函数名称。
2. 如果你看到一个函数名称不能很好地传达它的用途，应该马上加以修改。
3. 你的代码首先是为人写的，其次才是为计算机写的。而人需要良好名称的函数。
### 范例
**重构前**
```
getTelephoneNumber (){
  return `(${_officeAreaCode}-${_officeNumber})`
}
```
**重构后**
```
getOfficeTelephoneNumber (){
  return `(${_officeAreaCode}-${_officeNumber})`
}
```
## 二. Add Parameter（添加参数）
### 介绍
1. 场景
某个函数需要从调用端得到更多信息。
2. 手法
为此函数添加一个对象参数，让该对象带进函数所需信息。
### 动机
1. 除了添加参数外，你常常还有其他选择。只要可能，其他选择都比添加参数要好，因为他们不会增加参数列的长度。
2. 过长的参数列是不好的味道，因为程序员很难记住那么多参数。
3. 并非禁止添加参数，但是在添加参数之前需要了解是否有其他选择。
## 三. Remove Parameter（移除参数）
### 介绍
1. 场景
函数本体不再需要某个参数。
2. 手法
将该参数去除。
### 动机
1. 程序员可能经常添加参数，却往往不愿意去掉他们。
2. 参数代表着函数所需的信息，不同的参数值有不同的意义，应及时去掉多余参数。
## 四. Separate Query form Modifier（将查询函数和修改函数分离）
### 介绍
1. 场景
某个函数既返回对象状态值，又修改对象状态。
2. 手法
建立两个不同的函数，其中一个负责查询，另一个负责修改。
### 动机
1. 任何有返回值的函数，都不应该有看得到的副作用。
2. 如果你遇到一个“既有返回值又有副作用”的函数，就应该试着将查询动作从修改动作中分割出来。
### 范例
**重构前**
```
foundMiscreant(people) {
  for(let i = 0; i < people.length; i++) {
    if(people[i] === 'Don' || peoplep[i] === 'John') {
      this.sendAlert()
      return 'Dom'
    }
  }
  return ''
}

checkSecurity(people) {
  const found = this.foundMiscreant(people)
  this.someLaterCode(found)
}
```
**重构后**
```
foundPerson(people) {
  for(let i = 0; i < people.length; i++) {
    if(people[i] === 'Don' || peoplep[i] === 'John') {
      return 'Dom'
    }
  }
  return ''
}

alertPerson(people) {
  if(this.foundPerson(people)) {
    this.sendAlert()
  }
}

checkSecurity(people) {
  this.alertPerson(people)
  const found = this.foundPerson(people)
  this.someLaterCode(found)
}
```
## 五. Parameterize Method（令函数携带参数）
### 介绍
1. 场景
若干函数做了类似的工作，但在函数本体中却包含了不同的值。
2. 手法
建立单一函数，以参数表达那些不同的值。
### 动机
1. 你可能发现这样的两个函数：他们做着类似的工作，但因为少数几个值致使行为略有不同。
2. 你可以将这些各自分离的函数统一起来，并通过参数来处理那些变化，用以简化问题。
3. 本项重构的要点在于：以“可将少量数据视为参数”为依据，找出带有重复性的代码。
### 范例
**重构前**
```
baseCharge() {
  let result = Math.min(this.lastUsage(), 100) * 0.03
  if(this.lastUsage() > 100) {
    result += (Math.min(this.lastUsage(), 200) -100) * 0.05
  }
  if(this.lastUsage() > 200) {
    result += (this.lastUsage() - 200) * 0.07
  }
  return new Dollars(result)
}
```
**重构后**
```
baseCharge() {
  let result = this.usageInRange(0, 100) * 0.03
  result += this.usageInRange(100, 200) + 0.05
  result += this.usageInRange(200, Number.MAX_SAFE_INTEGER)
  return new Dollars(result)
}

usageInRange(start, end) {
  return this.lastUsage() > start ? Math.min(this.lastUsage(), end) - start : 0
}
```
## 六. Replace Parameter with Explicit Methods（以明确函数取代参数）
### 介绍
1. 场景
你有一个函数，其中完全取决于参数值而采取不同行为。
2. 手法
针对该参数的每一个可能值，建立一个独立函数。
### 动机
1. 如果某个参数有多种可能的值，而函数内又以条件表达式检查这些参数值，并根据不同参数值做出不同的行为，那么就应该使用本项重构。
2. 提供不同的函数给调用者使用，可以避免出现条件表达式。
3. 本项重构可以获取一个更清晰的接口，哪怕只是给一个内部的布尔变量赋值，`Switch.beOn()`也比`Switch.setState(true)`要清晰的多。
### 范例
**重构前**
```
class Employee {
  static ENGINEER = 0;
  static SALESMAN = 1;
  static MANAGER = 2;

  static create(type) {
    switch(type) {
      case Employee.ENGINEER:
        return new Engineer()
      case Employee.SALESMAN:
        return new Salesman()
      case Employee.MANAGER:
        return new Manager()
      default:
        throw new Error('Incorrect type value')
    }
  }
}

const e = Employee.create(Employee.ENGINEER)
```
**重构后**
```
class Employee {
  static createEngineer() {
    return new Engineer()
  }

  static createSalesman() {
    return new Salesman()
  }

  static createManager() {
    return new Manager()
  }
}

const e = Employee.createEngineer()
```
## 七. Preserve Whole Object(保持对象完整)
### 介绍
1. 场景
你从某个对象中取出若干值，将他们作为某一次函数调用时的参数。
2. 手法
改为传递整个对象。
### 范例
**重构前**
```
class Room {
  withinPlan(plan) {
    const low = this.daysTempRange().getLow()
    const high = this.daysTempRange().getHigh()
    return plan.withinRange(low, high)
  }
}

class HeatingPlan {
  withinRange(low, high) {
    return low >= this._range.getLow() && high <= this._range.getHigh()
  }
}
```
**重构后**
```
class Room {
  withinPlan(plan) {
    return plan.withinRange(this.daysTempRange())
  }
}

class HeatingPlan {
  withinRange(arg) {
    return arg.getLow() >= this._range.getLow() && arg.getHigh() <= this._range.getHigh()
  }
}
```
## 八. Replace Parameter with Methods(以函数取代参数)
### 介绍
1. 场景
对象调用某个函数，并将所得结果作为参数，传递给另一个函数。而接受该参数的函数本身也能够调用前一个函数。
2. 手法
让参数接受者去除该项参数，并直接调用前一个函数。
### 动机
1. 如果函数可以通过其他途径获得参数值，那么他就不应该通过参数获取该值。
### 范例
**重构前**
```
getPrice() {
  const basePrice = this._quantity * this._itemPrice
  const discountLevel = this._quantity > 100 ? 2 : 1
  return this.discountPrice(basePrice, discountLevel)
}

discountPrice(basePrice, discountLevel) {
  return discountLevel === 2 ? basePrice * 0.1 : basePrice * 0.05
}
```
**重构后**
```
getPrice() {
  return this.getDiscountLevel() === 2 ? this.getBasePrice() * 0.1 : this.getBasePrice() * 0.05
}

getBasePrice() {
  return this._quantity * this._itemPrice
}

getDiscountLevel() {
  return this._quantity > 100 ? 2 : 1
}
```
## 九. Introduce Parameter Object(引入参数对象)
### 介绍
1. 场景
某些参数总是很自然地同时出现。
2. 手法
以一个对象取代这些参数。
### 动机
1. 经常看到特定的一组参数总是一起被传递。可能有好几个函数都使用这一组参数，这些函数可能隶属与同一个类，也可能隶属于不同的类。
2. 这样的一组参数就是所谓的数据泥团，我们可以运用一个对象包装所有这些数据，再以该对象取代他们。
### 范例
**重构前**
```
class Entry{
  constructor(value, chargeDate) {
    this._value = value
    this._chargeDate = chargeDate
  }

  getDate() {
    return this._chargeDate
  }

  getValue() {
    return this._value
  }
}

class Account{
  getFlowBetween(start, end) {
    let result = 0
    this._entries.forEach(entry => {
      if(entry.getDate().equals(start) || entry.getDate().equals(end) || (entry.getDate().after(start) && entry.getDate().before(end))) {
        result += entry.getValue()
      }
    })
    return result
  }
}

const flow = anAccount.getFlowBetween(startDate, endDate)
```
**重构后**
```
class Entry{
  constructor(value, chargeDate) {
    this._value = value
    this._chargeDate = chargeDate
  }

  getDate() {
    return this._chargeDate
  }

  getValue() {
    return this._value
  }
}

class DateRange {
  constructor(start, end) {
    this._start = start
    this._end = end
  }

  getStart() {
    return this._start
  }

  getEnd() {
    return this._end
  }

  includes(arg) {
    return arg.equals(this._start) || 
    arg.equals(this._end) || 
    (arg.after(this._start) && arg.before(this._end))
  }
}

class Account{
  getFlowBetween(range) {
    let result = 0
    this._entries.forEach(entry => {
      if(range.includes(entry.getDate())){
        result += entry.getValue()
      }
    })
    return result
  }
}

const flow = anAccount.getFlowBetween(new DateRange(startDate, endDate))
```
## 十. Remove Setting Method(移除设置函数)
### 介绍
1. 场景
类中的某个字段应该在对象创建时被设值，然后就不再改变。
2. 手法
去掉该字段的所有设值函数。
### 范例
**重构前**
```
class Account {
  constructor(id) {
    this.setId(id)
  }

  setId(arg) {
    this._id = arg
  }
}
```
**重构后**
```
class Account {
  constructor(id) {
    this._id = id
  }
}
```
## 十一. Hide Method(隐藏函数)
### 介绍
1. 场景
有一个函数，从来没有被其他任何类用到。
2. 手法
将这个函数修改为`private`
### 动机
1. 重构往往促使你修改函数的可见度。
2. 当你面对一个过于丰富、提供了过多行为的接口时，就值得将非必要的取值函数和设值函数隐藏起来。
## 十二. Replace Constructor with Factory Method(以工厂函数取代构造函数)
### 介绍
1. 场景
你希望在创建对象时不仅仅是做简单的建构工作。
2. 手法
将构造函数替换为工厂函数。
### 范例
**重构前**
```
class Employee {
  static ENGINEER = 0;
  static SALESMAN = 1;
  static MANAGER = 2;

  constructor(type) {
    this._type = type
  }
}
```
**重构后**
```
class Employee {
  static ENGINEER = 0;
  static SALESMAN = 1;
  static MANAGER = 2;

  static create(type) {
    return new Employee(type)
  }

  constructor(type) {
    this._type = type
  }
}
```
## 十三. Encapsulate Downcast(封装向下转型)
### 介绍
1. 场景
某个函数返回的对象，需要由函数调用者执行向下转型。
2. 手法
将向下转型动作移至函数中。
### 范例
`JavaScript`无需转型，无法演示该重构手法。
## 十四. Replace Error Code with Exception(以异常取代错误码)
### 介绍
1. 场景
某个函数返回一个特定的代码，用以表示某种错误情况。
2. 手法
改用异常。
### 范例
**重构前**
```
withdraw(amount){
  if(mount > this._balance) {
    return -1
  } else {
    this._balance -= amount
    return 0
  }
}
```
**重构后**
```
withdraw(amount){
  if(mount > this._balance) {
    throw new Error('余额不足')
  } 
  this._balance -= amount
}
```
## 十五. Replace Exception with Test(以测试取代异常)
### 介绍
1. 场景
面对一个调用者可以预先检查的条件，你抛出了一个异常。
2. 手法
修改调用者，使它在调用函数之前先做检查。
### 动机
1. 异常只应该被用于异常的、罕见的行为，也就是那些产生意料之外的错误的行为。而不应该成为条件检查的替代品。
### 范例
**重构前**
```
class ResourcePool {
  _available;
  _allocated;

  getResource() {
    let result;
    try {
      result = this._available.pop()
      this._allocated.push(result)
      return result
    } catch (error) {
      result = new Resource()
      this._allocated.push(result)
      return result      
    }
  }
}
```
**重构后**
```
class ResourcePool {
  _available;
  _allocated;

  getResource() {
    let result;
    if(this._available.isEmpty()) {
      result = new Resource()
    } else {
      result = this._available.pop()
    }
    this._allocated.push(result)
    return result
  }
}
```
# Chapter8 - 处理概括关系
## 一. Full Up Field(字段上移)
### 介绍
1. 场景
两个子类拥有相同的字段。
2. 手法
将该字段移至超类。
### 动机
本项重构去除了重复的数据声明，并且将使用该字段的行为从子类移至超类，去除重复的行为。
## 二. Pull Up Method（函数上移）
### 介绍
1. 场景
有些函数，在各个子类中产生完全相同的结果。
2. 手法
将该函数移至超类。
### 动机
1. 避免行为重复是很重要的。重复自身只会成为错误的滋生地，此外别无价值。
2. 无论何时，只要系统之内出现重复，你就面临“修改其中一个却未能修改另一个”的风险。
## 三. Pull Up Constructor Body(构造函数本体上移)
### 介绍
1. 场景
你在各个子类中拥有一些构造函数，它们的本体几乎完全一致。
2. 手法
在超类中新建一个构造函数，并在子类构造函数中调用它。
### 动机
如果你看见各个子类中的函数有共同行为，第一个念头应该是将共同行为提炼到一个独立函数中，然后将这个函数提升到超类。
### 范例
**重构前**
```
class Employee {
  _name;
  _id;
  constructor(name, id) {
    this._name = name
    this._id = id
  }

  isPriviliged() {}

  assignCar() {}
}

class Manager extends Employee {
  constructor(name, id, grade) {
    this._name = name
    this._id = id
    this._grade = grade
    if(this.isPriviliged()) {
      this.assignCar()
    }
  }
}
```
**重构后**
```
class Employee {
  _name;
  _id;
  constructor(name, id) {
    this._name = name
    this._id = id
  }

  initialize() {
    if(this.isPriviliged()) {
      this.assignCar()
    }
  }

  isPriviliged() {}

  assignCar() {}
}

class Manager extends Employee {
  constructor(name, id, grade) {
    super(name, id)
    this._grade = grade
    this.initialize()
  }
}
```
## 四. Push Down Method(函数下移)
### 介绍
1. 场景
超类中的某个函数只与部分(而非全部)子类有关。
2. 手法
将这个函数移到相关的那些子类去。
### 动机
`Push Down Method`(函数下移)与`Pull Up Method`(函数上移)恰恰相反。
## 五. Push Down Field(字段下移)
### 介绍
1. 场景
超类中的某个字段只被部分(而非全部)子类用到。
2. 手法
将这个字段移到需要它的那些子类去。
### 动机
`Push Down Field`(字段下移)与`Full Up Field`(字段上移)恰恰相反。
## 六. Extract Subclass(提炼子类)
### 介绍
1. 场景
类中的某些特性只被某些(而非全部)实例用到。
2. 手法
新建一个子类，将上面所说的那一部分特性移到子类中。
### 范例
**重构前**
```
class JobItem{
  constructor(unitPrice, quantity, isLabor, employee) {
    this._unitPrice = unitPrice
    this._quantity = quantity
    this._isLabor = isLabor
    this._employee = employee
  }

  getUnitPrice() {
    return this._isLabor ? this._employee.getRate() : this._unitPrice
  }

  getTotalPrice() {
    return this.getUnitPrice() * this._quantity
  }

  getQuantity() {
    return this._quantity
  }

  getEmployee() {
    return this._employee
  }
}

class Employee {
  constructor(rate) {
    this._rate = rate
  }

  getRate() {
    return this._rate
  }
}
```
**重构后**
```
class JobItem{
  constructor(unitPrice, quantity) {
    this._unitPrice = unitPrice
    this._quantity = quantity
  }

  getUnitPrice() {
    return this._unitPrice
  }

  getTotalPrice() {
    return this.getUnitPrice() * this._quantity
  }

  getQuantity() {
    return this._quantity
  }
}

class LaborItem extends JobItem{
  constructor(quantity, employee) {
    super(0, quantity)
    this._employee = employee
  }

  getUnitPrice() {
    return this._employee.getRate() 
  }

  getEmployee() {
    return this._employee
  }
}

class Employee {
  constructor(rate) {
    this._rate = rate
  }

  getRate() {
    return this._rate
  }
}
```
## 七. Extract Superclass(提炼超类)
### 介绍
1. 场景
两个类有相似特性。
2. 手法
为这两个类建立一个超类，将相同特性移至超类。
### 动机
1. 重复代码是系统中最糟糕的东西之一。如果你在不同地方做同一件事情，一旦需要修改那些动作，你就得平白做更多的修改。
### 范例
**重构前**
```
class Employee{
  constructor(name, id, annualCost) {
    this._name = name
    this._id = id
    this._annualCost = annualCost
  }

  getAnnualCost() {
    return this._annualCost
  }

  getId() {
    return this._id
  }

  getName() {
    return this._name
  }
}

class Department{
  _staff = []

  constructor(name) {
    this._name = name
  }

  getStaff() {
    return this._staff
  }

  getTotalAnnualCost() {
    let result = 0
    this.getStaff().forEach(item => {
      result += item.getAnnualCost()
    })
    return result
  }

  getHeadCount() {
    return this._staff.length
  }

  addStaff(arg) {
    return this._staff.push(arg)
  }

  getName() {
    return this._name
  }
}
```
**重构后**
```
class Party{
  constructor(name) {
    this._name = name
  }

  getName() {
    return this._name
  }

  getAnnualCost() {}
}


class Employee extends Party{
  constructor(name, id, annualCost) {
    super(name)
    this._id = id
    this._annualCost = annualCost
  }

  getAnnualCost() {
    return this._annualCost
  }

  getId() {
    return this._id
  }
}

class Department extends Party{

  _staff = []

  constructor(name) {
    super(name)
  }

  getStaff() {
    return this._staff
  }

  getAnnualCost() {
    let result = 0
    this.getStaff().forEach(item => {
      result += item.getAnnualCost()
    })
    return result
  }

  getHeadCount() {
    return this._staff.length
  }

  addStaff(arg) {
    return this._staff.push(arg)
  }
}
```
## 八. Extract Interface(提炼接口)
### 介绍 
1. 场景
若干客户使用类接口中的同一子集，或者两个类的接口有部分相同。
2. 手法
将相同的子集提炼到一个独立接口中。
### 范例
`JavaScript`没有接口的概念，无法用代码演示该重构手法。
## 九. Collapse Hierarchy（折叠继承体系）
### 介绍
1. 场景
超类和子类之间无太大区别。
2. 手法
将它们合为一体。
### 动机
1. 继承体系很容易变得过分复杂。重构继承体系往往是将函数和字段在体系中上下移动。
2. 如果发现某个子类并未带来该有的价值，需要把超类与子类合并起来。
## 十. Form Template Method(塑造模板函数)
### 介绍
1. 场景
你有一些子类，其中相应的某些函数以相同顺序执行类似的操作，但各个操作的细节上有所不同。
2. 手法
将这些操作分别放进独立函数中，并保持他们都有相同的签名，于是原函数也就变得相同了。然后将原函数上移至超类。
### 动机
1. 继承是避免重复行为的一个强大工具。只要你看见两个子类之中有类似的函数，就可以把他们提升到超类。
2. 如果子类中两个函数以相同顺序执行大致相近的操作，但是各操作不完全相同。这种情况下我们可以将执行操作的序列移至超类，并借助多态保证各操作仍得以保持差异性。这样的函数被称为模板方法。
### 范例
[**重构前**](https://github.com/nmwei/javascript-refactoring/blob/master/src/1.4%20%E8%BF%90%E7%94%A8%E5%A4%9A%E6%80%81%E5%8F%96%E4%BB%A3%E4%B8%8E%E4%BB%B7%E6%A0%BC%E7%9B%B8%E5%85%B3%E7%9A%84%E6%9D%A1%E4%BB%B6%E9%80%BB%E8%BE%91.js)
```
class Customer {
  statement() {
    const rentals = this._rentals
    // \n表示换行
    let result = `Rental Record for ${this.getName()}\n`
    rentals.forEach(item => {
      //\t表示制表符
      result += `\t${item.getMovie().getTitle()}\t${item.getCharge()}\n`
    })

    result += `Amount owed is ${this.getTotalCharge()} \n`
    result += `You earned ${this.getTotalFrequentRenterPoints()} frequent renter points`
    return result
  }

  htmlStatement() {
    const rentals = this._rentals
    let result = `<h1>Rentals for<EM>${this.getName()}</EM></h1><P>\n`
    rentals.forEach(item => {
      result += `${item.getMovie().getTitle()}: ${item.getCharge()}<BR>\n`
    })
    result += `<P> You owe <EM> ${this.getTotalCharge()}</EM><P>\n`
    result += `On this rental you earned <EM> ${this.getTotalFrequentRenterPoints()} </EM> frequent renter points <P>`
    return result
  }
}
```
**重构后**
```
class Customer {
  statement() {
    return new TextStatement().value(this)
  }

  htmlStatement() {
    return new HtmlStatement().value(this)
  }
}

class Statement {
  value(customer) {
    const rentals = customer._rentals
    let result = this.headerString(customer)
    rentals.forEach(item => {
      result += this.eachRentalString(item)
    })
    result += this.footerString(customer)
    return result
  }

  headerString(customer) {}

  eachRentalString(customer) {}

  footerString(customer) {}
}

class TextStatement extends Statement {
  headerString(customer) {
    return `Rental Record for ${customer.getName()}\n`
  }

  eachRentalString(rental) {
    return `\t${rental.getMovie().getTitle()}\t${rental.getCharge()}\n`
  }

  footerString(customer) {
    return `Amount owed is ${customer.getTotalCharge()} \n You earned ${customer.getTotalFrequentRenterPoints()} frequent renter points`
  }
}

class HtmlStatement extends Statement {
  headerString(customer) {
    return `<h1>Rentals for<EM>${customer.getName()}</EM></h1><P>\n`
  }

  eachRentalString(rental) {
    return `${rental.getMovie().getTitle()}: ${rental.getCharge()}<BR>\n`
  }

  footerString(customer) {
    return `<P> You owe <EM> ${customer.getTotalCharge()}</EM><P>\n On this rental you earned <EM> ${customer.getTotalFrequentRenterPoints()} </EM> frequent renter points <P>`
  }
}
```
## 十一. Replace Inheritance with Delegation(以委托取代继承)
### 介绍
1. 场景
某个子类只使用超类接口中的一部分，或是根本不需要继承而来的数据。
2. 手法
在子类中新建一个字段用以保存超类；调整子类函数，令它改而委托超类；然后去掉两者之间的继承关系。
### 动机
1. 继承是个好东西，但有时候它并不是你要的。
2. 如果从超类中继承了许多用不到的方法或数据，就应该以委托取代继承。
### 范例
**重构前**
```
class MyStack extends Vector {
  push(element) {
    this.insertElement(element, 0)
  }

  pop() {
    const result = this.firstElement()
    this.removeElementAt(0)
    return result
  }
}
```
**重构后**
```
class MyStack {
  _vector = new Vector()

  push(element) {
    this._vector.insertElement(element, 0)
  }

  pop() {
    const result = this._vector.firstElement()
    this._vector.removeElementAt(0)
    return result
  }
  size() {
    return this.Vector.size()
  }

  isEmpty() {
    return this._vector.isEmpty()
  }
}
```
## 十二. Replace Delegation with Inheritance(以继承取代委托)
### 介绍
1. 场景
你在两个类之间使用委托关系，并经常为整个接口编写许多极简单的委托函数。
2. 手法
让委托类继承受委托类。
### 动机
1. 本重构与`Replace Inheritance with Delegation`(以委托取代继承)恰恰相反。
2. 如果你发现自己需要使用受委托类中的所有函数，并且费了很大力气编写所有极简的委托函数，本重构可以帮助你轻松回头使用继承。
3. 如果你并没有使用受委托类的所有函数，那么就不应该将委托关系替换为继承关系。
4. 如果受托对象被不止一个其他对象共享，并且受托对象时可变的，你就不能将委托关系替换为继承关系。
### 范例
**重构前**
```
class Employee {
  _person = new Person()

  getName() {
    return this._person.getName()
  }

  setName(arg) {
    this._person.setName(arg)
  }

  toString() {
    return `Emp: ${this._person.getLastName()}`
  }
}


class Person{
  _name 

  getName() {
    return this._name
  }

  setName(arg) {
    this._name = arg
  } 

  getLastName() {
    return this._name.substring(this._name.lastIndexOf(' ') + 1)
  }
}
```
**重构后**
```
class Employee extends Person {
  toString() {
    return `Emp: ${this.getLastName()}`
  }
}


class Person{
  _name 

  getName() {
    return this._name
  }

  setName(arg) {
    this._name = arg
  } 

  getLastName() {
    return this._name.substring(this._name.lastIndexOf(' ') + 1)
  }
}
```
# Chapter9 - 研究成果
# 大型重构
1. 大型重构可能需要耗时数月甚至数年。在这个过程中，你应该根据需要安排自己的工作，只在需要添加新功能或修补错误时才进行重构。重构程度只要能满足其他任务的需要就行了，反正明天你还可以回来重构。
3. 由于大型重构可能需要花费相当长的时间，因此他们并不像其他章节介绍的重构那样，能够立刻让人满意。你必须有那么一点小小的信仰：你每天都在使你自己的程序世界更安全。
4. 进行大规模重构时，有必要为整个开发团队建立共识，这时小型重构所不需要的。
## 一. Tease Apart Inheritance(梳理并分解继承体系)
### 介绍
1. 场景
某个继承体系同时承担两项责任。
2. 手法
建立两个继承体系，并通过委托关系让其中一个可以调用另一个。
### 动机
1. 继承是个好东西，它可以明显减少子类中的代码量。
2. 继承很容易被误用，并且这种误用很容易在开发者之间蔓延。今天你为了一项小小任务而加入一个小小的子类，明天又为另一项任务在继承体系的另一个地方加入另一个子类。
3. 混乱的继承体系是一个严重的问题，因为它会导致重复代码，并且使修改变得困难，因为特定问题的解决策略被分散到了整个继承体系。
4. 如果继承体系中的某一特定层级上的所有类，其子类名称都以相同的形容词开始，那么这个体系很可能就是承担着两项不同的责任。
### 范例
**一个混乱的继承体系**
![image.png](https://upload-images.jianshu.io/upload_images/4989175-577f556ded088d70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/540)
**分割继承体系**
![image.png](https://upload-images.jianshu.io/upload_images/4989175-340bff636a9339d9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/540)
**显示风格之间的差异可以用变量来表现**
![image.png](https://upload-images.jianshu.io/upload_images/4989175-a4b1c971da77464f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/540)
## 二. Convert Procedural Design to Objects(将过程化设计转化为对象设计)
### 介绍
1. 场景
你手上有一些传统过程化风格的代码。
2. 手法
将数据记录变成对象，将大块的行为分成小块，并将行为移入相关对象之中。
### 动机
1. 你往往会面对一些过程化风格的代码所带来的问题，并因此希望他们变得更面向对象一些。
2. 典型的情况是：类中有着长长的过程化函数和极少的数据，旁边则是一堆哑数据对象——除了数据访问函数外没有其他任何函数。如果你要转换的是一个纯粹的过程化程序，可能连这些东西都没有。
3. 并不是说绝对不应该出现只有行为而几乎没有数据的对象。在策略模式中，我们常使用策略对象来改变宿主对象的行为，这些小型的策略对象就只有行为而没有数据。但这样的对象通常比较小，而且只有在我们特别需要灵活性的时候，才会使用它们。
### 范例 
**重构前**
[第1章售票范例](https://github.com/nmwei/javascript-refactoring/blob/master/src/%E7%AC%AC%E4%B8%80%E7%AB%A0/1.1%20%E8%B5%B7%E7%82%B9.js)
**重构后**
[分解并重组statement()](https://github.com/nmwei/javascript-refactoring/blob/master/src/%E7%AC%AC%E4%B8%80%E7%AB%A0/1.3%20%E5%88%86%E8%A7%A3%E5%B9%B6%E9%87%8D%E7%BB%84statement().js)
## 三. Separate Domain from Presentation(将领域和表述/显示分离)
### 介绍
1. 场景
某些`GUI`类之中包含了领域逻辑。
2. 手法
将领域逻辑分离出来，为他们建立独立的领域类。
### 动机
1. 提到面向对象，就不能不提`MVC`(模型-视图-控制器)模式。`MVC`模式最核心的价值在于：它将用户界面代码(即：视图；亦即现今常说的“展现层”)和领域逻辑(即模型)分离了。
2. 展现类只含用以处理用户界面的逻辑：领域类不含任何与程序外观相关的代码，只含业务逻辑相关的代码。
3. 将程序中这两块复杂的部分加以分离，程序未来的修改将变得更加容易，同时也使同一业务逻辑的多种展现方式成为可能。
4. 大多数人并没有在设计中采用这种方式来处理`GUI`。大多数客户端/服务器结构的`GUI`应用都采用双层逻辑设计：数据保存在数据库中，业务逻辑放在展现类中。
## 四. Extract Hierarchy(提炼继承体系)
### 介绍
1. 场景
你有某个类做了太多工作，其中一部分工作是以大量条件表达式完成的。
2. 手法
建立继承体系，以一个子类表示一种特殊情况。
### 动机
1. 在渐进式设计过程中，常常会有这样的情况：一开始设计者只想以一个类实现一个概念；但随着设计方案的演化，最后却可能一个类实现了两个、三个乃至十个不同的概念。
2. 当你遇到这种瑞士军刀般的类——不但能够开瓶开罐、砍小树枝、还能在演示会上打出激光强调重点——你就需要一个好策略(亦即本项重构)，将它的各个功能梳理并分开。
# 重构，复用与现实
1. 在很多系统的开发中，大部分成本并不是花在最初版本上，而是花在其后对系统不断的修改和调整上。
2. 你可以重写整个程序，依赖自己的设计经验来纠正程序中存在的错误。你可以复制、修改现有系统的一部分，以扩展它的功能。重构是上述两个极端的中庸之道。通过重新组织软件结构，重构使得设计思路更详尽明确。
# 重构工具
1. 重构的最大障碍之一就是：几乎没有工具对它提供支持。
2. 那些把重构作为文化成分之一的语言(例如`Smalltalk`)通常都提供了强大的开发环境，其中对代码重构的众多必要特性都提供了支持。但即使是这样的环境，到目前为止，也只是对重构过程提供了部分支持，绝大部分工作仍然得靠手工完成。
3. **如果能够把重构变得像调整代码格式那么简单，程序员自然也会乐意像整理代码外观那样去整理系统的设计。而这样的整理对代码的可维护性、可复用性和可理解性，都能够带来深远的正面影响。**
4. 随着重构成本的降低，设计错误也不再像从前那样带来昂贵代价了。由于弥补设计错误所需的成本降低了，需要预先做的设计也就更少了。预先设计是一项带有预测性质的工作，因为项目激活之时，需求往往还不明朗。
5. 拥有自动化重构工具的辅助之后，所需测试少多了，因为很多重构都可以自动进行，无需再做测试。
6. 重构工具的技术标准
① 程序数据库
可以搜索程序元素的交叉引用。
例如：找到某个特定函数的所有调用点，找到读/写某个特定实例变量的所有函数。
② 解析树
能够处理函数层面下的一部分系统，通常是对被修改程序元素的引用。
例如：如果某个实例变量被改名，那么其所属类及其子类中对该实例变量的所有引用都必须更新。将某个函数的一部分提炼为一个独立函数。对于函数任何修改都必须能够处理函数结构，因此我们需要解析树的帮助。
③ 准确性
由于工具实现的重构，必须合理保持程序原有行为。
对于绝大多数程序来说，重构可以相当准确。只要可能破坏重构准确性的因素都被识别出来，重构技术员就可以避免在不适当时候进行重构，也可以避免对于重构工具无法修补的程序错误地进行手工修补。
7. 重构工具的实用标准
① 速度
重构前的分析和必要调整，可能会耗费较多时间，因为他们有可能非常复杂。如果重构前需要大量准备工作，程序员就不会使用自动化重构工具，他们宁可手工进行重构。
② 撤销
撤销功能可以让我们放心尝试，不会遭受任何惩罚，因为我们总是可以回到原先的任何一个版本。
③ 与其他工具集成
集成开发环境(`IDE`)已经成为绝大多数开发项目的核心工具。重构工具集成于集成开发环境有利于更多开发者使用它。
# 总结
1. 你已经了解了重构的基础，但还不知道何时应该使用它们、何时不应该使用；何时开始、何时停止；何时前进、何时等待。使重构能够成功的，不是前面各自独立的技术，而是这种节奏。
2. 当你开始冷静下来的时候，对自己的重构技艺感到绝对自信——无论别人留下的代码多么杂乱无章，你都可以将它变好，好到足够进行后续的开发——那时你就知道，自己已经“得道”了。
3. 只要有光，你就可以前进，虽然谨慎却仍然自信。但是，一旦太阳下山，你就应该停止前进；夜晚你应该睡觉，并且相信明天早晨太阳仍然升起。
4. 重构是一种可以学习的技术，如何学习？
**① 虽然挑一个目标**
某个地方的代码开始发臭了，你就应该将问题解决掉。你应该朝着目标前进，达成目标后就停止。你之所以重构，不是为了探索真善美(至少不全是)，而是为了让你的系统更容易被人理解，为了防止程序变得散乱。
**② 没把握就停下来**
朝目标前进的过程中，可能会有这样的时候：你无法再自信满满的进行下一步，无法证明自己所做的一切能够保持程序原本的语义。此时你就应该停下来。如果代码已经改善了一些，就发布你的成果；如果没有，就撤销所有修改。
**③ 经常原路返回**
重构的原则不好学，而且很容易遗失准头。每次重构之后一定要运行所有测试。如果出错了，应该回到最近一个没有出错的状态，而不是试图让他们再次正常运行。
**④ 二重奏**
和别人一起重构，可以收到更好的效果。两人结对时，对于任何一种软件开发都有很多好处，对于重构也不例外。与搭档交谈时，你必须把刚刚做的事情讲出来，交谈过程中有助于你更清楚了解如何让个别的重构项适应整个重构节奏。
5. 即使你已经在你的重构目标(代码)中工作了好几年，一丝一缕了然于胸，但只要发现其中的坏味道，以及消除坏味道的重构手法，你就有可能看到程序的另一种可能。
6. 没有一位经理愿意听到他的开发人员说“我们要停工三个月来清理以前的代码”。而且开发人员本来也就不应该这样做。大规模的重构只会带来灾难。
7. 你前面的代码也行看起来混乱极了，不要着急，一点一点慢慢地解决这些问题。当你想要添加新功能时，用上几分钟时间把代码整理一下。重构可以使你更好理解代码的作用和工作方式，这使得新功能的添加更容易，而且重构之后代码的质量也会大大提高。
8. 永远不要忘记“两顶帽子”：添加新功能，以及重构。添加新功能时，你不应该修改既有代码。重构时，应该保持代码功能完全不变。
