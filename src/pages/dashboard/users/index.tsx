'use client';

import { useState, useMemo } from 'react';
import { Scan, scansData, User, userData } from '../../../demo-data/user-data';
import { UsersHeader } from './components/UsersHeader';
import { UsersTable } from './components/UsersTable';
import { AllScansModal } from './components/AllScansModal';
import { ScanDetailsModal } from './components/ScanDetailsModal';
import { ActionModal } from './components/ActionModal';

export default function Users() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [users, setUsers] = useState<User[]>(userData);

    // Modal states
    const [allScansModal, setAllScansModal] = useState(false);
    // const [selectedUserForScans, setSelectedUserForScans] = useState<User | null>(null);
    const [scanDetailsModal, setScanDetailsModal] = useState(false);
    const [selectedScan, setSelectedScan] = useState<Scan | null>(null);
    const [actionModal, setActionModal] = useState(false);
    const [selectedUserForAction, setSelectedUserForAction] = useState<User | null>(null);

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const matchesSearch =
                user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesStatus = statusFilter === 'all' || user.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [users, searchQuery, statusFilter]);

    const handleViewAllScans = () => {
        // setSelectedUserForScans(user);
        setAllScansModal(true);
    };

    const handleViewScanDetails = (scan: Scan) => {
        setSelectedScan(scan);
        setScanDetailsModal(true);
    };

    const handleActionClick = (user: User) => {
        setSelectedUserForAction(user);
        setActionModal(true);
    };

    const handleToggleBlock = (userId: string, isBlocking: boolean) => {
        setUsers(
            users.map((user) => (user.id === userId ? { ...user, status: isBlocking ? 'blocked' : 'active' } : user)),
        );
    };

    const handleDeleteUser = (userId: string) => {
        setUsers(users.filter((user) => user.id !== userId));
        setActionModal(false);
    };

    return (
        <>
            <div
                style={{
                    padding: 24,
                    borderRadius: 8,
                    boxShadow:
                        '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
                    border: '1px solid #f0f0f0',
                }}
            >
                <UsersHeader
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    statusFilter={statusFilter}
                    onStatusFilterChange={setStatusFilter}
                />

                <UsersTable users={filteredUsers} onViewAllScans={handleViewAllScans} onAction={handleActionClick} />
            </div>

            {/* Modals */}
            <AllScansModal
                isOpen={allScansModal}
                onClose={() => setAllScansModal(false)}
                scans={scansData}
                onViewScanDetails={handleViewScanDetails}
            />

            <ScanDetailsModal
                isOpen={scanDetailsModal}
                onClose={() => setScanDetailsModal(false)}
                scan={selectedScan}
            />

            <ActionModal
                isOpen={actionModal}
                setIsOpen={setActionModal}
                user={selectedUserForAction}
                onToggleBlock={handleToggleBlock}
                onDeleteUser={handleDeleteUser}
            />
        </>
    );
}
