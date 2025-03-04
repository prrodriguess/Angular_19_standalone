import { Injectable } from '@angular/core';

export interface Dog {
  name: string;
  age: number;
  ownerName: string;
  description: string;
  longDescription: string;
  photoUrl: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  dogs: Dog[] = [
    {
      name: 'Pingo',
      age: 5,
      ownerName: 'Alan Pontes',
      description: 'Ele gosta de brincar',
      longDescription:
        'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      photoUrl: 'assets/dogs/dog5.jpg',
      location: 'Sorocaba',
    },
    {
      name: 'Goldeneye, barrows',
      age: 5,
      ownerName: 'Herc',
      description:
        'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      longDescription:
        'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Suite 5',
    },
    {
      name: 'Sheep, red',
      age: 5,
      ownerName: 'Roxanne',
      description:
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
      longDescription: 'Mauris sit amet eros.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: '3rd Floor',
    },
    {
      name: 'Phascogale, brush-tailed',
      age: 5,
      ownerName: 'Fawne',
      description:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
      longDescription:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: '15th Floor',
    },
    {
      name: 'Genoveva',
      age: 5,
      ownerName: 'Barbette',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
      longDescription:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Room 415',
    },
    {
      name: 'Bee-eater (unidentified)',
      age: 5,
      ownerName: 'Lina',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
      longDescription:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: '18th Floor',
    },
    {
      name: 'Mountain duck',
      age: 5,
      ownerName: 'Cy',
      description:
        'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      longDescription:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 546',
    },
    {
      name: 'Eurasian hoopoe',
      age: 5,
      ownerName: 'Basilius',
      description: 'Morbi vel lectus in quam fringilla rhoncus.',
      longDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'PO Box 51270',
    },
    {
      name: 'Dog, african wild',
      age: 5,
      ownerName: 'Rafa',
      description: 'Suspendisse potenti.',
      longDescription: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 1484',
    },
    {
      name: 'Deer, red',
      age: 5,
      ownerName: 'Bret',
      description:
        'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      longDescription:
        'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 403',
    },
    {
      name: 'Dragonfly, russian',
      age: 5,
      ownerName: 'Bobbie',
      description:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      longDescription:
        'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Room 1157',
    },
    {
      name: 'Hornbill, yellow-billed',
      age: 5,
      ownerName: 'Bendick',
      description:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      longDescription:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: '4th Floor',
    },
    {
      name: 'Crown of thorns starfish',
      age: 5,
      ownerName: 'Madelene',
      description:
        'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      longDescription:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Suite 42',
    },
    {
      name: 'Booby, blue-faced',
      age: 5,
      ownerName: 'Ann-marie',
      description:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
      longDescription:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 247',
    },
    {
      name: 'Galapagos albatross',
      age: 5,
      ownerName: 'Emmott',
      description:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
      longDescription:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'PO Box 64365',
    },
    {
      name: 'Canadian river otter',
      age: 5,
      ownerName: 'Gianna',
      description:
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
      longDescription:
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Room 232',
    },
    {
      name: 'Green vine snake',
      age: 5,
      ownerName: 'Kissiah',
      description: 'Maecenas tincidunt lacus at velit.',
      longDescription: 'Cras non velit nec nisi vulputate nonummy.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Room 318',
    },
    {
      name: 'Pied butcher bird',
      age: 5,
      ownerName: 'Nance',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      longDescription:
        'Proin interdum mauris non ligula pellentesque ultrices.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 1839',
    },
    {
      name: 'Eagle, tawny',
      age: 5,
      ownerName: 'Olenka',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
      longDescription:
        'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 477',
    },
    {
      name: 'Ant (unidentified)',
      age: 5,
      ownerName: 'Wayne',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      longDescription:
        'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 728',
    },
    {
      name: 'Booby, blue-faced',
      age: 5,
      ownerName: 'Bil',
      description:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      longDescription:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: '5th Floor',
    },
    {
      name: 'Blackbuck',
      age: 5,
      ownerName: 'Marcel',
      description:
        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      longDescription:
        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Suite 72',
    },
    {
      name: 'Hornbill, red-billed',
      age: 5,
      ownerName: 'Currie',
      description:
        'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
      longDescription:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: '6th Floor',
    },
    {
      name: 'Skimmer, four-spotted',
      age: 5,
      ownerName: 'Opal',
      description:
        'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
      longDescription:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Suite 70',
    },
    {
      name: 'Crown of thorns starfish',
      age: 5,
      ownerName: 'Aubree',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      longDescription:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 1937',
    },
    {
      name: 'Jackrabbit, white-tailed',
      age: 5,
      ownerName: 'Randell',
      description:
        'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      longDescription:
        'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: '4th Floor',
    },
    {
      name: 'Toucan, white-throated',
      age: 5,
      ownerName: 'Jillane',
      description: 'Vestibulum sed magna at nunc commodo placerat.',
      longDescription:
        'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Suite 46',
    },
    {
      name: 'Pied kingfisher',
      age: 5,
      ownerName: 'Lita',
      description:
        'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
      longDescription:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
      photoUrl: 'assets/dogs/dog1.jpg',
      location: 'Apt 1962',
    },
    {
      name: 'White-tailed deer',
      age: 5,
      ownerName: 'Kitti',
      description:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      longDescription:
        'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'PO Box 53409',
    },
    {
      name: 'Lizard, mexican beaded',
      age: 5,
      ownerName: 'Orion',
      description:
        'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      longDescription: 'Nunc purus.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Suite 69',
    },
    {
      name: 'Tortoise, burmese black mountain',
      age: 5,
      ownerName: 'Marsh',
      description:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
      longDescription:
        'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 1139',
    },
    {
      name: 'Mountain duck',
      age: 5,
      ownerName: 'Wendell',
      description:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      longDescription: 'Proin at turpis a pede posuere nonummy.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Suite 35',
    },
    {
      name: 'Possum, ring-tailed',
      age: 5,
      ownerName: 'Afton',
      description: 'Nunc purus.',
      longDescription:
        'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Room 966',
    },
    {
      name: 'Wolf, timber',
      age: 5,
      ownerName: 'Andrey',
      description:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      longDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'PO Box 37601',
    },
    {
      name: 'Barrows goldeneye',
      age: 5,
      ownerName: 'Anny',
      description:
        'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      longDescription:
        'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Suite 7',
    },
    {
      name: 'Duck, comb',
      age: 5,
      ownerName: 'Lilli',
      description:
        'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
      longDescription:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: '3rd Floor',
    },
    {
      name: 'Grey-footed squirrel',
      age: 5,
      ownerName: 'Jecho',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
      longDescription:
        'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'PO Box 59213',
    },
    {
      name: 'Civet, small-toothed palm',
      age: 5,
      ownerName: 'Garnet',
      description:
        'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
      longDescription: 'Nulla nisl.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Room 1432',
    },
    {
      name: 'Eurasian red squirrel',
      age: 5,
      ownerName: 'Daniela',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
      longDescription:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'PO Box 7116',
    },
    {
      name: 'Thirteen-lined squirrel',
      age: 5,
      ownerName: 'Eden',
      description:
        'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      longDescription:
        'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 596',
    },
    {
      name: 'Fox, north american red',
      age: 5,
      ownerName: 'Zelda',
      description:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      longDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Suite 88',
    },
    {
      name: 'Mourning collared dove',
      age: 5,
      ownerName: 'Stefa',
      description: 'Quisque ut erat.',
      longDescription:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'PO Box 27003',
    },
    {
      name: 'Common pheasant',
      age: 5,
      ownerName: 'Tasia',
      description:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      longDescription:
        'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'PO Box 57611',
    },
    {
      name: 'Roseate cockatoo',
      age: 5,
      ownerName: 'Ravi',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
      longDescription:
        'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 180',
    },
    {
      name: 'Caracal',
      age: 5,
      ownerName: 'Tallulah',
      description:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
      longDescription:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Room 1426',
    },
    {
      name: 'Goanna lizard',
      age: 5,
      ownerName: 'Danette',
      description:
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      longDescription:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: '1st Floor',
    },
    {
      name: 'Grebe, little',
      age: 5,
      ownerName: 'Consolata',
      description:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
      longDescription:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 1839',
    },
    {
      name: 'Comb duck',
      age: 5,
      ownerName: 'Donn',
      description:
        'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      longDescription:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 1710',
    },
    {
      name: 'Tropical buckeye butterfly',
      age: 5,
      ownerName: 'Paolina',
      description:
        'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
      longDescription:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: '5th Floor',
    },
    {
      name: 'Red-winged blackbird',
      age: 5,
      ownerName: 'Deina',
      description:
        'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      longDescription:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: '10th Floor',
    },
    {
      name: "Barbet, levaillant's",
      age: 5,
      ownerName: 'Dana',
      description:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
      longDescription:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'PO Box 58298',
    },
    {
      name: 'Blackish oystercatcher',
      age: 5,
      ownerName: 'Lynea',
      description: 'Duis mattis egestas metus. Aenean fermentum.',
      longDescription:
        'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 1513',
    },
    {
      name: 'Common grenadier',
      age: 5,
      ownerName: 'Minda',
      description:
        'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      longDescription:
        'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Suite 63',
    },
    {
      name: 'Tern, arctic',
      age: 5,
      ownerName: 'Eberhard',
      description:
        'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
      longDescription:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 1792',
    },
    {
      name: 'Rat, white-faced tree',
      age: 5,
      ownerName: 'Saunder',
      description:
        'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      longDescription:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 908',
    },
    {
      name: 'Anteater, australian spiny',
      age: 5,
      ownerName: 'Jayson',
      description:
        'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
      longDescription:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Room 1998',
    },
    {
      name: 'Legaan, Monitor (unidentified)',
      age: 5,
      ownerName: 'Verney',
      description:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
      longDescription:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: '16th Floor',
    },
    {
      name: 'Japanese macaque',
      age: 5,
      ownerName: 'Caron',
      description:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
      longDescription:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
      photoUrl: 'assets/dogs/dog2.jpg',
      location: 'Apt 161',
    },
    {
      name: 'Steenbuck',
      age: 5,
      ownerName: 'Coralyn',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      longDescription:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: '14th Floor',
    },
    {
      name: 'Shrike, crimson-breasted',
      age: 5,
      ownerName: 'Deanne',
      description:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      longDescription:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'PO Box 31551',
    },
    {
      name: 'Phalarope, red',
      age: 5,
      ownerName: 'Otho',
      description:
        'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
      longDescription:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'PO Box 40861',
    },
    {
      name: 'Lion, asian',
      age: 5,
      ownerName: 'Meggie',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
      longDescription:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Apt 673',
    },
    {
      name: 'African pied wagtail',
      age: 5,
      ownerName: 'Donna',
      description:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
      longDescription:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Apt 224',
    },
    {
      name: 'Peacock, indian',
      age: 5,
      ownerName: 'Ashia',
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      longDescription: 'Duis ac nibh.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Suite 11',
    },
    {
      name: 'Red-tailed phascogale',
      age: 5,
      ownerName: 'Staci',
      description:
        'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      longDescription:
        'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Apt 359',
    },
    {
      name: 'Legaan, ground',
      age: 5,
      ownerName: 'Fayina',
      description:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      longDescription:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: '16th Floor',
    },
    {
      name: 'Elegant crested tinamou',
      age: 5,
      ownerName: 'Howey',
      description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
      longDescription:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: '1st Floor',
    },
    {
      name: 'Great skua',
      age: 5,
      ownerName: 'Vasili',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
      longDescription:
        'Nullam sit amet turpis elementum ligula vehicula consequat.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: '9th Floor',
    },
    {
      name: 'Parakeet, rose-ringed',
      age: 5,
      ownerName: 'Kessia',
      description:
        'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      longDescription:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Suite 34',
    },
    {
      name: 'Neotropic cormorant',
      age: 5,
      ownerName: 'Hulda',
      description:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
      longDescription: 'Nulla facilisi.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Suite 54',
    },
    {
      name: 'Kingfisher, white-throated',
      age: 5,
      ownerName: 'Arman',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
      longDescription:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Room 494',
    },
    {
      name: 'White-winged dove',
      age: 5,
      ownerName: 'Ranique',
      description:
        'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
      longDescription:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Room 196',
    },
    {
      name: 'Marten, american',
      age: 5,
      ownerName: 'Puff',
      description:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
      longDescription:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'PO Box 27507',
    },
    {
      name: 'Llama',
      age: 5,
      ownerName: 'Sigfrid',
      description:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
      longDescription:
        'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Suite 97',
    },
    {
      name: 'Pigeon, wood',
      age: 5,
      ownerName: 'Charita',
      description:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      longDescription: 'Pellentesque eget nunc.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Suite 95',
    },
    {
      name: 'Turkey, wild',
      age: 5,
      ownerName: 'Sybila',
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      longDescription:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Apt 1438',
    },
    {
      name: 'Tokay gecko',
      age: 5,
      ownerName: 'Deanna',
      description: 'Nulla mollis molestie lorem. Quisque ut erat.',
      longDescription:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: '11th Floor',
    },
    {
      name: 'Salmon pink bird eater tarantula',
      age: 5,
      ownerName: 'Tadd',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      longDescription:
        'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Apt 1703',
    },
    {
      name: 'American bison',
      age: 5,
      ownerName: 'Shalna',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
      longDescription:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Suite 89',
    },
    {
      name: 'Pelican, brown',
      age: 5,
      ownerName: 'Magda',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
      longDescription:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Room 1766',
    },
    {
      name: 'Chital',
      age: 5,
      ownerName: 'Garnet',
      description:
        'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
      longDescription: 'Sed accumsan felis.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Apt 934',
    },
    {
      name: 'Crab (unidentified)',
      age: 5,
      ownerName: 'Xever',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
      longDescription:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Suite 11',
    },
    {
      name: 'Indian mynah',
      age: 5,
      ownerName: 'Deonne',
      description:
        'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
      longDescription:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: '17th Floor',
    },
    {
      name: 'Giant anteater',
      age: 5,
      ownerName: 'Reinwald',
      description:
        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      longDescription: 'Nunc purus.',
      photoUrl: 'assets/dogs/dog3.jpg',
      location: 'Apt 1958',
    },
    {
      name: 'Wallaroo, common',
      age: 5,
      ownerName: 'Hatti',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
      longDescription:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Room 1873',
    },
    {
      name: 'White-eye, pale',
      age: 5,
      ownerName: 'Itch',
      description:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
      longDescription:
        'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'PO Box 44349',
    },
    {
      name: 'Ornate rock dragon',
      age: 5,
      ownerName: 'Nari',
      description:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
      longDescription:
        'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Apt 203',
    },
    {
      name: 'White-nosed coatimundi',
      age: 5,
      ownerName: 'Felita',
      description:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
      longDescription:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Apt 1603',
    },
    {
      name: 'Common wolf',
      age: 5,
      ownerName: 'Neala',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
      longDescription:
        'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Apt 1359',
    },
    {
      name: 'Bonnet macaque',
      age: 5,
      ownerName: 'Tobe',
      description:
        'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
      longDescription:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Suite 1',
    },
    {
      name: 'Stork, european',
      age: 5,
      ownerName: 'Melosa',
      description:
        'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
      longDescription:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'PO Box 19216',
    },
    {
      name: 'Ring-necked pheasant',
      age: 5,
      ownerName: 'Rhys',
      description:
        'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
      longDescription: 'Curabitur at ipsum ac tellus semper interdum.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Room 1290',
    },
    {
      name: 'Savanna fox',
      age: 5,
      ownerName: 'Shawn',
      description:
        'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      longDescription:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'PO Box 57316',
    },
    {
      name: "Burchell's gonolek",
      age: 5,
      ownerName: 'Marybelle',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
      longDescription:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Suite 42',
    },
    {
      name: 'Gecko, barking',
      age: 5,
      ownerName: 'Johanna',
      description:
        'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      longDescription:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Suite 56',
    },
    {
      name: 'Desert spiny lizard',
      age: 5,
      ownerName: 'Letty',
      description:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
      longDescription:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: '17th Floor',
    },
    {
      name: 'Civet cat',
      age: 5,
      ownerName: 'Veronika',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
      longDescription:
        'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'PO Box 60991',
    },
    {
      name: 'Red-billed hornbill',
      age: 5,
      ownerName: 'Garwin',
      description:
        'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      longDescription:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
      photoUrl: 'assets/dogs/dog4.jpg',
      location: 'Apt 953',
    },
    {
      name: 'Ringtail',
      age: 5,
      ownerName: 'Johnathan',
      description:
        'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
      longDescription:
        'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      photoUrl: 'assets/dogs/dog5.jpg',
      location: 'Suite 2',
    },
    {
      name: 'Racer, blue',
      age: 5,
      ownerName: 'Yorke',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
      longDescription:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
      photoUrl: 'assets/dogs/dog5.jpg',
      location: 'PO Box 63580',
    },
  ];
}
