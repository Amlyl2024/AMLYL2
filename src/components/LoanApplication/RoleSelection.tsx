import React from 'react';
import { UserPlus, Users } from 'lucide-react';

interface Props {
  onSelect: (role: 'lender' | 'borrower') => void;
}

export default function RoleSelection({ onSelect }: Props) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center text-gray-900">Choose Your Role</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => onSelect('lender')}
          className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition border-2 border-transparent hover:border-primary-500"
        >
          <Users className="h-16 w-16 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Lender</h3>
          <p className="text-gray-600 text-center">
            Invest your money and earn interest by lending to verified borrowers
          </p>
          <div className="mt-4 text-sm text-primary-600">
            Average returns: 8-15% APR
          </div>
        </button>

        <button
          onClick={() => onSelect('borrower')}
          className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition border-2 border-transparent hover:border-primary-500"
        >
          <UserPlus className="h-16 w-16 text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Borrower</h3>
          <p className="text-gray-600 text-center">
            Get funded quickly with competitive interest rates
          </p>
          <div className="mt-4 text-sm text-primary-600">
            Rates starting from 6% APR
          </div>
        </button>
      </div>
    </div>
  );
}