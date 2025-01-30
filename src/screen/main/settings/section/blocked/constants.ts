import { BlockedUserType } from './types';
import { getDogImage } from '@/services/dogServices';

const generateBlockedUsers = async (): Promise<BlockedUserType[]> => {
    const users = [
        { id: '1', name: 'Ayşe Yılmaz', phoneNumber: '+90 532 111 2233', isBlocked: true },
        { id: '2', name: 'Mehmet Demir', phoneNumber: '+90 555 444 5566', isBlocked: true },
        { id: '3', name: 'Fatma Kaya', phoneNumber: '+90 542 777 8899', isBlocked: true },
        { id: '4', name: 'Ali Öztürk', phoneNumber: '+90 533 123 4567', isBlocked: true },
        { id: '5', name: 'Zeynep Çelik', phoneNumber: '+90 544 890 1234', isBlocked: true },
        { id: '6', name: 'Mustafa Şahin', phoneNumber: '+90 537 567 8901', isBlocked: true },
        { id: '7', name: 'Elif Arslan', phoneNumber: '+90 538 234 5678', isBlocked: true },
        { id: '8', name: 'Ahmet Aydın', phoneNumber: '+90 539 345 6789', isBlocked: true },
        { id: '9', name: 'Selin Yıldız', phoneNumber: '+90 541 456 7890', isBlocked: true },
        { id: '10', name: 'Can Özkan', phoneNumber: '+90 543 567 8901', isBlocked: true },
    ];

    const usersWithImages = await Promise.all(
        users.map(async (user) => ({
            ...user,
            image: await getDogImage()
        }))
    );

    return usersWithImages;
};

export const getBlockedUsers = generateBlockedUsers(); 